import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const pathname = req.nextUrl.pathname;

    // Manage route protection
    const isAuth = await getToken({ req });
    const isLoginPage = pathname?.startsWith("/login");

    const sensitiveRoutes = ["/main"];
    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname?.startsWith(route)
    );

    if (isLoginPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/main", req.url));
      }

      return NextResponse.next();
    }

    if (!isAuth && isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // if (pathname === "/dashboard" || pathname === "/dashboard/team") {
    //   return NextResponse.redirect(
    //     new URL(`/dashboard/team/64957a7bcfae252efba77192`, req.url)
    //   );
    // }
  },
  {
    callbacks: {
      async authorized({ token }) {
        return true;
      },
    },
  }
);

export const config = {
  matchter: ["/", "/login", "/dashboard/:path*"],
};
