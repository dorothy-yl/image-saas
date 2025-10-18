import { NextResponse, NextRequest } from "next/server";
// import { getServerSession } from "./server/auth";
// import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  //   const token = await getToken({
  //     req: request,
  //     secret: process.env.NEXTAUTH_SECRET
  //   });

  //   if (!token) {
  //     return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  //   }


  if (true) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard",
};
