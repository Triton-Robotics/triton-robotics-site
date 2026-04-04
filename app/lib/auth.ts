import { type NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

const allowedEmails = ["tritonrobotics@ucsd.edu", "abaskar@ucsd.edu"];

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar.readonly",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (
        user.email &&
        user.email.endsWith("@ucsd.edu") &&
        allowedEmails.includes(user.email)
      ) {
        return true;
      }

      return false;
    },
    async jwt({ token, account, user }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      if (user?.email) {
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email ?? session.user.email;
      }

      session.accessToken = token.accessToken as string | undefined;
      return session;
    },
  },
  pages: {
    signIn: "/member-login",
    error: "/member-login",
  },
};
