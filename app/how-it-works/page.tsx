"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function HowItWorksPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
    setTimeout(() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }), 400);
  }, [router]);
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 rounded-full" style={{ borderColor: "#c9a84c", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
    </div>
  );
}
