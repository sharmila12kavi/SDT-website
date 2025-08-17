import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // your Gmail
        pass: process.env.EMAIL_PASS,  // Gmail App Password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Skill Decode Tech" <${process.env.EMAIL_USER}>`,
      to: "skilldecodetech@gmail.com", // <-- Replace with your email
      subject: "New Enquiry from Website",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
