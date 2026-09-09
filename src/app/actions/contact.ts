"use server";

import { Resend } from "resend";
import { z } from "zod";

import ContactNotificationEmail from "../emails/contact-notification";
import ContactThankYouEmail from "../emails/contact-thank-you";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success?: boolean;
  error?: string;
  message?: string;
};

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name."),

  email: z
    .email("Please enter a valid email address."),

  projectType: z
    .string()
    .min(1, "Please select a project type."),

  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your project."),

  referral: z
    .string()
    .optional(),
});

export async function submitContactForm(
  _previousState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      referral: formData.get("referral") || undefined,
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      return {
        success: false,
        error: result.error.issues[0]?.message ?? "Please check your form.",
      };
    }

    const {
      name,
      email,
      projectType,
      message,
      referral,
    } = result.data;

    /*
     * 1. Send the enquiry to Khethiwe Creatives
     */
    const { error: notificationError } =
      await resend.emails.send({
        from: "Khethiwe Creatives <onboarding@resend.dev>",
        to: ["khethiwecreatives@gmail.com"],
        replyTo: email,
        subject: `New project enquiry — ${projectType}`,
        react: ContactNotificationEmail({
          name,
          email,
          projectType,
          message,
          referral,
        }),
      });

    if (notificationError) {
      console.error(
        "Resend notification error:",
        notificationError
      );

      return {
        success: false,
        error:
          "We couldn't send your enquiry. Please try again.",
      };
    }

    /*
     * 2. Send confirmation to the client
     */
    const { error: thankYouError } =
      await resend.emails.send({
        from: "Khethiwe Creatives <khethiwecreatives@gmail.com>",
        to: [email],
        subject: "We've received your enquiry — Khethiwe Creatives",
        react: ContactThankYouEmail({
          name,
        }),
      });

    if (thankYouError) {
      console.error(
        "Resend thank-you error:",
        thankYouError
      );

      /*
       * The enquiry itself was already received,
       * so don't tell the client their enquiry failed.
       */
    }

    return {
      success: true,
      message:
        "Thanks for reaching out. We'll get back to you within 1–2 business days.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      error:
        "Something went wrong. Please try again or email us directly.",
    };
  }
}