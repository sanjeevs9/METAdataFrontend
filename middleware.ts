import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    console.log({token});
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  return NextResponse.next(); // Allow access
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|api).*)',
    ],
};
