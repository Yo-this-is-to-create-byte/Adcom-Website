import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { CONTACT } from '@/constants/testIds';
import MagneticButton from './MagneticButton';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const budgets = ['< ₹2L / mo', '₹2L – ₹5L / mo', '₹5L – ₹10L / mo', '₹10L+ / mo'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [state, setState] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.message) {
      setError('Name, email and message are required.');
      return;
    }
    setState('submitting');
    try {
      await axios.post(`${API}/contact`, form);
      setState('success');
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.detail || 'Something went wrong. Please try again.');
      setState('idle');
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="orb bg-[#4F46E5] w-[600px] h-[600px] -bottom-60 -left-40 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#A0A0A0] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#A0A0A0]" /> Contact
            </div>
            <h2 className="font-display text-[44px] md:text-[64px] lg:text-[88px] leading-[0.95] tracking-tighter">
              Let's build<br />
              something<br />
              <span className="text-[#6366F1]">that grows.</span>
            </h2>
            <p className="mt-8 text-[18px] md:text-[20px] text-[#A0A0A0] leading-relaxed max-w-md">
              Tell us about your business and what you want to scale. We respond to every
              serious enquiry within one business day.
            </p>

            <div className="mt-12 space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3">
                <span className="text-[#A0A0A0] uppercase tracking-[0.2em] text-xs">Email</span>
                <a href="mailto:hello@adcommedia.co" className="hover:text-[#6366F1] transition-colors">
                  hello@adcommedia.co
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3">
                <span className="text-[#A0A0A0] uppercase tracking-[0.2em] text-xs">Studio</span>
                <span>Bengaluru · Dubai · Remote</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-3">
                <span className="text-[#A0A0A0] uppercase tracking-[0.2em] text-xs">Booking</span>
                <span>Next intake — open</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm p-6 md:p-10">
              <AnimatePresence mode="wait">
                {state === 'success' ? (
                  <motion.div
                    key="success"
                    data-testid={CONTACT.successMessage}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 text-center"
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#4F46E5] flex items-center justify-center mb-6">
                      <Check size={28} />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-3">
                      Brief received.
                    </h3>
                    <p className="text-[#A0A0A0] max-w-sm mx-auto">
                      A senior strategist will be in touch within one business day. In the meantime, we're already reading.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    data-testid={CONTACT.form}
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Field
                        label="Name"
                        testid={CONTACT.nameInput}
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Ada Lovelace"
                        required
                      />
                      <Field
                        label="Email"
                        testid={CONTACT.emailInput}
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@brand.com"
                        required
                      />
                    </div>
                    <Field
                      label="Company"
                      testid={CONTACT.companyInput}
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Brand name"
                    />
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#A0A0A0] mb-3">
                        Monthly Budget
                      </label>
                      <div className="flex flex-wrap gap-2" data-testid={CONTACT.budgetSelect}>
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            data-testid={`budget-option-${b}`}
                            onClick={() => setForm((f) => ({ ...f, budget: b }))}
                            className={`px-4 py-2 rounded-full text-xs md:text-sm border transition-colors ${
                              form.budget === b
                                ? 'bg-white text-black border-white'
                                : 'border-[rgba(255,255,255,0.12)] text-white/80 hover:border-white'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-[#A0A0A0] mb-3">
                        Tell us about your business
                      </label>
                      <textarea
                        data-testid={CONTACT.messageInput}
                        value={form.message}
                        onChange={update('message')}
                        rows={5}
                        required
                        placeholder="What are you building, what's working, what's not, and what would success look like in 12 months?"
                        className="w-full bg-transparent border-b border-[rgba(255,255,255,0.12)] focus:border-white outline-none py-3 text-white placeholder:text-white/30 resize-none transition-colors"
                      />
                    </div>

                    {error && (
                      <div className="text-sm text-red-400">{error}</div>
                    )}

                    <MagneticButton
                      type="submit"
                      data-testid={CONTACT.submitButton}
                      disabled={state === 'submitting'}
                      className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4F46E5] hover:bg-[#6366F1] text-white text-sm font-semibold transition-colors duration-300 disabled:opacity-60"
                    >
                      {state === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Brief
                          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, testid, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-[#A0A0A0] mb-3">{label}</label>
      <input
        data-testid={testid}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-[rgba(255,255,255,0.12)] focus:border-white outline-none py-3 text-white placeholder:text-white/30 transition-colors"
      />
    </div>
  );
}
