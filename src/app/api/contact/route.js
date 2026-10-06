import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const COMPANY_EMAIL = process.env.COMPANY_EMAIL;

export async function POST(request) {
  const { name, email, message, company } = await request.json();

  if (company) return Response.json({ ok: true }); // honeypot: silently drop bots
  if (!name || !email || !message || message.length > 5000) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Los Tres Gudinos Website <Contact@lostresgudinosmasonrycontractor.com>",
    to: COMPANY_EMAIL,
    replyTo: email,
    subject: `Contact form: ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) return Response.json({ error: "Send failed" }, { status: 500 });
  return Response.json({ ok: true });
}