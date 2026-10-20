import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLang, negotiateLang } from "@/lib/i18n";

/** Send visitors without a language prefix to /en or /fr. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (isLang(first)) return;

  const lang = negotiateLang(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals and any file with an extension (PDF, icons, images).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
