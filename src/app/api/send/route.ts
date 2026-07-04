import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email("Email is invalid!"),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY is missing." },
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log("Incoming Request:", body);

    const result = EmailSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          error: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { fullName, email, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["relaxbanaa@gmail.com"], // Change this later after verifying your domain
      replyTo: email,
      subject: `New Portfolio Contact from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        message,
      }),
    });

    if (error) {
      console.error("❌ Resend Error:", error);

      return Response.json(
        {
          success: false,
          error,
        },
        { status: 500 }
      );
    }

    console.log("✅ Email Sent:", data);

    return Response.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Server Error:", err);

    return Response.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}