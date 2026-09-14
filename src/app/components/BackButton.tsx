"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group inline-flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.14em] text-black/50 transition-colors hover:text-accent"
    >
      <ArrowLeft
        size={25}
        strokeWidth={1.2}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />

      Back
    </button>
  );
}