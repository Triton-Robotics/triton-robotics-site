import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = [
        // "nallam@ucsd.edu",
        "tritonrobotics@ucsd.edu",
      ];

      // Only allow if they have a UCSD email AND are in whitelist
      if (user.email && user.email.endsWith("@ucsd.edu") && allowedEmails.includes(user.email)) {
        return true;
      }
      
      // Returning false denies access and redirects to an error page
      return false; 
    },
  },
  pages: {
    signIn: '/member-login', // Points NextAuth to your custom page
    error: '/member-login',  // Redirects back here if sign-in fails
  }
})

export { handler as GET, handler as POST }