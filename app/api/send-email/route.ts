// app/api/send-email/route.ts

import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY as string);
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, message } = body;

    // Create the email options
    const emailData = {
      to: "hello@ingenieriaslentas.com", // Your email where you want to receive messages
      from: "hello@ingenieriaslentas.com", // Sender's email
      subject: `New message from ${name}`,
      text: message,
      html: `
        <p><strong>You have a new message from your website contact form.</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await sendgrid.send(emailData);

    // Return a successful response
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
  }
}