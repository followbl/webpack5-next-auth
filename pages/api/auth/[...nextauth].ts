import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "clientId123",
      clientSecret: "clientSecret123",
    }),
  ],
  // SQL or MongoDB database (or leave empty)
  database: `postgres://postgres:password@localhost:5432/customdb`,
});
