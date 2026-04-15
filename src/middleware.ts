import { NextResponse, type NextRequest } from "next/server";

// Simple HTTP Basic Auth — browser shows native username/password prompt.
// Defaults to arena / arena2026 unless overridden via environment variables.
const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER ?? "arena";
const BASIC_AUTH_PASS = process.env.BASIC_AUTH_PASS ?? "arena2026";

export function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const [user, pass] = decoded.split(":");
      if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Arena MVNO Proposal", charset="UTF-8"',
    },
  });
}

export const config = {
  // Protect every route except Next.js internals and static asset metadata.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
