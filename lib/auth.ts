import "server-only";

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins"
import { prisma } from "./db";
import { env } from "./env";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },

  plugins: [
    emailOTP({
      async sendVerificationOTP({email, otp}) {
        const { data, error } = await resend.emails.send({
    from: 'Hi-Up <onboarding@resend.dev>',
    to: [email],
    subject: 'Hi-Up - Verify your email',
    html: `<p>Your OTP is <strong>${otp}</strong></p>`
  });
      }
    }),
  ],
});
