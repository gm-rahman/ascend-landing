"use client";

import Link from "next/link";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { AscendLogo } from "@/components/ascend-logo";
import { AscendBanner } from "@/components/ascend-banner";

export default function SignInPage() {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground font-sans antialiased overflow-hidden">
      <header className="flex h-14 w-full items-center justify-between border-b border-border bg-surface px-6 md:px-8 flex-shrink-0">
        <Link href="/" className="flex items-center gap-2.5">
          <AscendLogo width={20} height={20} showDetails={false} />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Ascend
          </span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors duration-150 hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to home
        </Link>
      </header>

      <main className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        <section className="flex flex-1 flex-col items-center justify-center bg-[#f0f4f9] dark:bg-background p-8 sm:p-12 md:p-16">
          <div className="w-full max-w-sm text-center">
            <AscendLogo width={48} height={48} showDetails={true} className="mx-auto" />
            <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
              Sign in to Ascend
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The full workspace lives in the Ascend Admin application. Head back
              to the home page to request access or contact the team.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all duration-200 hover:opacity-90"
            >
              Back to home
            </Link>
          </div>
        </section>

        <section className="relative hidden flex-1 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1e6f77] via-[#114b53] to-[#0a3339] p-8 sm:p-12 md:p-16 text-white lg:flex">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--brand-color)]/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex justify-center">
            <div className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 shadow-lg">
              <AscendBanner logoSize={64} />
            </div>
          </div>

          <div className="relative z-10 my-auto max-w-xl text-center mx-auto">
            <Mail className="mx-auto size-8 text-[#e2b13c]" />
            <h3 className="mt-4 text-2xl font-medium leading-snug md:text-3xl text-white/95">
              &ldquo;Readiness is the work we do every day, not the moment we need it.&rdquo;
            </h3>
          </div>

          <div className="relative z-10 flex items-center gap-2 text-[10px] font-semibold tracking-wider text-white/60">
            <Lock className="size-3.5 text-[#e2b13c]" />
            <span>CUI // OPSEC · Not a Government System of Record</span>
          </div>
        </section>
      </main>
    </div>
  );
}