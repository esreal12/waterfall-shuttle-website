"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/50688888888"; // TODO: replace with the final number

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-2 sm:space-y-3">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2 sm:gap-3 rounded-full bg-brand-natural px-3 sm:px-4 py-2 sm:py-3 text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-brand-deep"
      >
        <span className="hidden sm:inline text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">Chat on WhatsApp</span>
        <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </span>
      </Link>
    </div>
  );
}
