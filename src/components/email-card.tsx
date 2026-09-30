"use client";

import { useState, type FormEvent } from "react";
import { FaPhone, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

// text-base keeps inputs at 16px so iOS doesn't zoom in on focus.
const fieldClass =
    "w-full rounded-md border border-white/70 bg-white/20 px-3 py-2.5 text-base text-white placeholder-white/70 outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/60";
const labelClass = "mb-1.5 block text-sm font-semibold";

type Status = "idle" | "sending" | "sent" | "error";
export const EmailCard = ({ companyEmail }: { companyEmail?: string }) => {
    const [status, setStatus] = useState<Status>("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget; // grab it before the await; React clears currentTarget afterwards
        const data = Object.fromEntries(new FormData(form));

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error(`Request failed: ${res.status}`);
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    return (
        <div className="grid gap-10 md:grid-cols-5 lg:gap-16">
            <div className="md:col-span-3">
                <h3 className="block-title mb-2">Get in touch with us!</h3>
                <p className="mb-6 text-white/80">
                    Send us an email directly using the form below, or through the contact information listed here.
                    Our area coverage and schedule are listed below for your convenience.
                </p>
                <form onSubmit={handleSubmit} noValidate={false} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className={labelClass}>Name</label>
                            <input type="text" name="name" id="name" required maxLength={100} autoComplete="name" className={fieldClass} />
                        </div>
                        <div>
                            <label htmlFor="email" className={labelClass}>Email</label>
                            <input type="email" name="email" id="email" required autoComplete="email" className={fieldClass} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className={labelClass}>Message</label>
                        <textarea name="message" id="message" rows={5} required maxLength={5000} className={fieldClass}></textarea>
                    </div>

                    {/* Honeypot: invisible to people, bots tend to fill it in */}
                    <input
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                    />

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="h-11 w-full rounded-md bg-white px-6 font-semibold text-stone-800 transition-colors hover:bg-stone-200 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                        {status === "sending" ? "Sending…" : "Send Message"}
                    </button>

                    <p aria-live="polite" className="text-sm">
                        {status === "sent" && "Thanks! Your message was sent. We'll get back to you soon."}
                        {status === "error" && "Sorry, something went wrong. Please call us or email us directly."}
                    </p>
                </form>
            </div>

            <div className="md:col-span-2">
                <h3 className="block-title mb-6">Contact Information</h3>
                <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                        <FaHome className="mt-1 size-5 shrink-0" />
                        <span>
                            Los Tres Gudinos - Masonry Contractor<br />
                            10612 Woody Ln<br />
                            Houston, TX 77093
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <FaPhone className="size-5 shrink-0"/>
                        <a href="tel:8329886550" className="hover:underline">(832) 988-6550</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <MdEmail className="size-5 shrink-0"/>
                        <a href={`mailto:${companyEmail}`} className="break-all hover:underline">{companyEmail}</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <SiFacebook className="size-5 shrink-0"/>
                        <a href="https://facebook.com/profile.php?id=100063528612566" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Find us on Facebook
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
