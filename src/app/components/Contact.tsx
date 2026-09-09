"use client";

import { useActionState, type ReactNode } from "react";
import Reveal from "./Reveal";
import {
  submitContactForm,
  type FormState,
} from "../actions/contact";

const INITIAL_STATE: FormState = {};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    INITIAL_STATE
  );

  return (
    <section
      id="contact"
      className="bg-black py-24 text-bg-light md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-secondary">
              Let's work together
            </p>

            <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-bg-light text-balance sm:text-6xl md:text-7xl">
              Let's make something
              <span className="block text-accent">
                worth seeing.
              </span>
            </h2>

            <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-bg-light/60 sm:text-lg">
              Tell us what you're working on. Whether you're building a
              brand, launching a project, documenting a moment or shaping
              your personal presence, we'd like to hear about it.
            </p>
          </div>
        </Reveal>

        {/* Contact + Form */}
        <div className="mt-20 grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:gap-20">

          {/* Contact Information */}
          <Reveal delay={100}>
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.12em] text-secondary">
                Contact
              </p>

              <div className="mt-7 space-y-5 font-body text-sm">

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.1em] text-bg-light/40">
                    Email
                  </p>

                  <a
                    href="mailto:khethiwecreatives@gmail.com"
                    className="text-bg-light transition-colors hover:text-secondary"
                  >
                    khethiwecreatives@gmail.com
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.1em] text-bg-light/40">
                    Phone
                  </p>

                  <a
                    href="tel:+27673479809"
                    className="text-bg-light transition-colors hover:text-secondary"
                  >
                    +27 67 347 9809
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.1em] text-bg-light/40">
                    Location
                  </p>

                  <p className="text-bg-light">
                    Klarinet Ext 6
                    <br />
                    Emalahleni (Witbank), Mpumalanga
                    <br />
                    South Africa
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-12">
                <p className="font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/40">
                  Follow Khethiwe Creatives
                </p>

                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-body text-sm">
                  <a
                    href="https://www.instagram.com/khethiwecreatives2024?igsi=MXRkYnZuYnU0cHh1OQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg-light transition-colors hover:text-secondary"
                  >
                    Instagram ↗
                  </a>

                  <a
                    href="https://www.behance.net/khethiwcreativ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg-light transition-colors hover:text-secondary"
                  >
                    Behance ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/khethiwe-creatives-undefined-065435433/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bg-light transition-colors hover:text-secondary"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              {/* Response time */}
              <p className="mt-12 max-w-xs font-body text-xs leading-relaxed text-bg-light/40">
                We usually respond within 1–2 business days. For urgent
                enquiries, email us directly.
              </p>
            </div>
          </Reveal>

          {/* Enquiry Form */}
          <Reveal delay={150}>
            <form
              action={formAction}
              className="border border-bg-light/15 bg-bg-light/[0.03] p-7 sm:p-9 md:p-10"
            >
              {state.success ? (
                <div className="flex min-h-[420px] flex-col justify-center">
                  <p className="font-display text-3xl text-bg-light sm:text-4xl">
                    Enquiry received.
                  </p>

                  <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-bg-light/50">
                    {state.message}
                  </p>

                  <p className="mt-6 font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/30">
                    Check your inbox for a confirmation email.
                  </p>
                </div>
              ) : (
                <div className="space-y-7">

                  {/* Name + Email */}
                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        disabled={isPending}
                        className="input-field disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </Field>

                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        disabled={isPending}
                        className="input-field disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </Field>
                  </div>

                  {/* Project Type */}
                  <Field
                    label="Project type"
                    htmlFor="projectType"
                  >
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      disabled={isPending}
                      className="input-field disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option>Photography</option>
                      <option>Videography</option>
                      <option>Graphic Design</option>
                      <option>Brand Identity</option>
                      <option>Web Design & Development</option>
                      <option>Multiple Services</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>

                  {/* Project Details */}
                  <Field
                    label="Tell us about the project"
                    htmlFor="message"
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      disabled={isPending}
                      placeholder="Tell us what you're working on, what you're looking to create, or where you'd like us to help."
                      className="input-field resize-none disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </Field>

                  {/* Referral */}
                  <Field
                    label="How did you hear about us?"
                    htmlFor="referral"
                  >
                    <select
                      id="referral"
                      name="referral"
                      defaultValue=""
                      disabled={isPending}
                      className="input-field disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>LinkedIn</option>
                      <option>Google</option>
                      <option>Referral</option>
                      <option>Previous client</option>
                      <option>Other</option>
                    </select>
                  </Field>

                  {/* Error */}
                  {state.error && (
                    <p className="font-body text-xs leading-relaxed text-red-300">
                      {state.error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-bg-light px-6 py-4 font-body text-[11px] uppercase tracking-[0.1em] text-black transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isPending
                      ? "Sending enquiry..."
                      : "Send enquiry →"}
                  </button>

                  <p className="text-center font-body text-[10px] leading-relaxed text-bg-light/30">
                    By submitting this form, you agree to be contacted
                    regarding your enquiry.
                  </p>

                </div>
              )}
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="font-body text-[10px] uppercase tracking-[0.1em] text-bg-light/45">
        {label}
      </span>

      <div className="mt-2">
        {children}
      </div>
    </label>
  );
}