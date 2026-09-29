"use-client";

import { useState, type FormEvent } from "react";
import { FaPhone, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";

const fieldClass =
    "w-full rounded-md border border-white bg-white/20 px-3 py-2 text-white placeholder-white/70 outline-none focus:bg-white/30 focus:ring-2 focus:ring-white/60";

type Status = "idle" | "sending" | "sent" | "error";
const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
export const EmailCard = () => {
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
        <section id="footer">
            <div className="flex flex-row">
                <div id="email-fields">
                    <h2>Get in touch with us!</h2>
                    <p>
                        Send us an email directly using the form below, or through the contact information on the right. <br />
                        Our area coverage and schedule are listed below for your convenience.
                    </p>
                    <form onSubmit={handleSubmit} noValidate={false}>
                        <div>
                            <div className="email-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" required maxLength={100} className={fieldClass} />
                            </div>
                            <div className="email-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required className={fieldClass} />
                            </div>
                            <div className="email-field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows={4} required maxLength={5000} className={fieldClass}></textarea>
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
                        </div>
                        <ul>
                            <li>
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="bg-white text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 rounded p-1 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "sending" ? "Sending…" : "Send Message"}
                                </button>
                            </li>
                        </ul>

                        <p aria-live="polite" className="mt-2 text-sm">
                            {status === "sent" && "Thanks! Your message was sent. We'll get back to you soon."}
                            {status === "error" && "Sorry, something went wrong. Please call us or email us directly."}
                        </p>
                    </form>
                </div>

                <ul className="contact-info">
                    <li className="flex flex-row items-center gap-2">
                        <FaHome className="size-5" />
                        Los Tres Gudinos - Masonry Contractor<br />
                        10612 Woody Ln<br />
                        Houston, TX 77093
                    </li>
                    <li className="flex flex-row items-center gap-2">
                        <FaPhone className="size-5"/>
                        <a href="tel:8329886550">(832) 988-6550</a>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                        <MdEmail className="size-5"/>
                        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                        <SiFacebook className="size-5"/>
                        <a href="https://facebook.com/profile.php?id=100063528612566" target="_blank" rel="noopener noreferrer">
                            facebook.com/profile.php?id=100063528612566
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};