import NextAuth, { AuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions:AuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log({ user, account, profile });
      return true; 
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };