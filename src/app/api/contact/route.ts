import { SendMailClient } from "zeptomail";
import { NextResponse } from "next/server";

const url = "https://api.zeptomail.com/v1.1/email";
const token = process.env.ZEPTOMAIL_TOKEN!;

const client = new SendMailClient({ url, token });

// Where to send contact form submissions
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "mike@totalfreedomlife.com";
const CONTACT_NAME = process.env.CONTACT_NAME || "Mike";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  reason: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, organization, role, reason, message } = body;

    // Basic server-side validation
    if (!name || !email || !organization || !role || !reason || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
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

    // Send email via ZeptoMail
    await client.sendMail({
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
      reply_to: {
        address: email,
        name: name,
      },
      subject: `[Contact] ${reason} - ${name} (${organization})`,
      htmlbody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
