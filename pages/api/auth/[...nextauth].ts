import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // Sign in with passwordless email link
    Providers.Email({
      server: "mailserver.com",
      from: "<no-reply@example.com>",
    }),
  ],
});
