export async function GET() {
  return Response.json({
    status: "success",
    env: {
      convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL,
      liveblocksKey: !!process.env.LIVEBLOCKS_SECRET_KEY,
      nodeEnv: process.env.NODE_ENV,
    },
    config: {
      runtime: "nodejs",
    },
  });
}