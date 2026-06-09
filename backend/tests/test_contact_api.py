"""Backend tests for Adcom Media API (root + contact endpoints)."""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL') or os.environ.get('BACKEND_URL')
if not BASE_URL:
    # Fallback to frontend .env
    from pathlib import Path
    fe_env = Path('/app/frontend/.env')
    if fe_env.exists():
        for line in fe_env.read_text().splitlines():
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip()
                break
BASE_URL = (BASE_URL or '').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
def test_root_returns_message(session):
    r = session.get(f"{API}/", timeout=20)
    assert r.status_code == 200, r.text
    body = r.json()
    assert "message" in body
    assert isinstance(body["message"], str)


# ---------- POST /api/contact validation ----------
def test_contact_invalid_email_returns_422(session):
    r = session.post(f"{API}/contact", json={
        "name": "TEST_invalid",
        "email": "not-an-email",
        "message": "Hello",
    }, timeout=20)
    assert r.status_code == 422, r.text


def test_contact_missing_required_returns_422(session):
    # missing email and message
    r = session.post(f"{API}/contact", json={"name": "TEST_missing"}, timeout=20)
    assert r.status_code == 422, r.text


def test_contact_empty_name_returns_422(session):
    r = session.post(f"{API}/contact", json={
        "name": "",
        "email": "x@example.com",
        "message": "hi",
    }, timeout=20)
    assert r.status_code == 422, r.text


# ---------- POST /api/contact success + persistence via GET ----------
def test_contact_create_and_persist(session):
    unique_msg = f"TEST_msg_{uuid.uuid4().hex[:8]}"
    payload = {
        "name": "TEST_Ada",
        "email": f"test_{uuid.uuid4().hex[:6]}@example.com",
        "company": "TEST_Co",
        "budget": "₹5L – ₹10L / mo",
        "message": unique_msg,
    }
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == payload["company"]
    assert data["budget"] == payload["budget"]
    assert data["message"] == unique_msg
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data
    assert "_id" not in data  # MongoDB ObjectId must not leak

    # Verify persistence
    r2 = session.get(f"{API}/contact", timeout=20)
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    assert any(it.get("id") == data["id"] and it.get("message") == unique_msg for it in items), \
        "Newly created contact not found in GET /api/contact"
    # No _id leakage in list
    for it in items[:10]:
        assert "_id" not in it


def test_contact_optional_fields_can_be_omitted(session):
    payload = {
        "name": "TEST_NoOpt",
        "email": f"noopt_{uuid.uuid4().hex[:6]}@example.com",
        "message": "Minimal payload",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["company"] is None
    assert body["budget"] is None
