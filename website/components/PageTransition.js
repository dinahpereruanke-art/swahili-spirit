"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LABELS = { "/": "Karibu", "/packages": "Safari" };
const STRIPES = ["bg-kanga", "bg-sun", "bg-ocean", "bg-flame", "bg-ink"];

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState("idle"); // idle | covering | revealing
  const [label, setLabel] = useState("Safari njema");
  const phaseRef = useRef("idle");

  function go(next) {
    phaseRef.current = next;
    setPhase(next);
  }

  // When the new page has arrived, sweep the stripes away
  useEffect(() => {
    if (phaseRef.current === "covering") {
      go("revealing");
      const t = setTimeout(() => go("idle"), 1100);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // Catch clicks on links to other pages on this site
  useEffect(() => {
    function onClick(e) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page: normal scroll

      e.preventDefault();
      e.stopPropagation();
      if (phaseRef.current !== "idle") return;

      const target = url.pathname + url.search + url.hash;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(target);
        return;
      }

      setLabel(LABELS[url.pathname] ?? "Safari njema");
      go("covering");
      setTimeout(() => router.push(target), 900);
      setTimeout(() => {
        if (phaseRef.current === "covering") go("idle"); // safety net
      }, 8000);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <div aria-hidden="true" className={`flip flip-${phase}`}>
      {STRIPES.map((color, i) => (
        <div key={i} className={`flip-panel ${color}`} style={{ "--i": i }} />
      ))}
      <div className="flip-label font-display">{label}</div>
    </div>
  );
}