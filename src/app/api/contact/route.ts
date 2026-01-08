import { NextResponse } from "next/server";

const ZEPTOMAIL_URL = "https://api.zeptomail.com/v1.1/email";
const token = process.env.ZEPTOMAIL_TOKEN!;

// Where to send contact form submissions
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contact@criticalthinkadvantage.com";
const CONTACT_NAME = process.env.CONTACT_NAME || "CriticalThink Advantage";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email via ZeptoMail REST API
    const response = await fetch(ZEPTOMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({
        from: {
          address: "contact@criticalthinkadvantage.com",
          name: "CriticalThink Advantage",
        },
        to: [
          {
            email_address: {
              address: CONTACT_EMAIL,
              name: CONTACT_NAME,
            },
          },
        ],
        reply_to: [
          {
            address: email,
            name: name,
          },
        ],
        subject: `[Contact] Inquiry from ${name}`,
        htmlbody: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("ZeptoMail error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
