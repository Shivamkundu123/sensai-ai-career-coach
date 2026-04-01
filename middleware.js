import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard/:path*",
    "/resume/:path*",
    "/interview/:path*",
    "/ai-cover-letter/:path*",
    "/onboarding/:path*",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    return auth().protect(); // ✅ correct
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
