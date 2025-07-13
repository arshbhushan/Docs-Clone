import { clerkMiddleware } from '@clerk/nextjs/server';

console.log("Middleware running on");
export default clerkMiddleware();
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/api/liveblocks-auth',
  ],
};
