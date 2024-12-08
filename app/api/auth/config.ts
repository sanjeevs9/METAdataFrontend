
import FacebookProvider from 'next-auth/providers/facebook';
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
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