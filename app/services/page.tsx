"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();
  useEffect(() => {
    // Redirect to homepage then scroll to services
    router.replace("/#services");
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, [router]);

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 rounded-full border-t-transparent" style={{ borderColor: "#c9a84c", borderTopColor: "transparent", animation: "spin 0.8s linear infinite" }} />
    </div>
  );
}
