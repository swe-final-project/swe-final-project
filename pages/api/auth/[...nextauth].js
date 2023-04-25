import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const isProd = process.env.NODE_ENV === "production";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: isProd
        ? process.env.GOOGLE_CLIENT_ID_PROD
        : process.env.GOOGLE_CLIENT_ID,
      clientSecret: isProd
        ? process.env.GOOGLE_CLIENT_SECRET_PROD
        : process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: isProd ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET,
});
