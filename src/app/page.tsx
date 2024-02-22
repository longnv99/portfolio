"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Overview from "@/components/oganisms/Section/Overview";
import Projects from "@/components/oganisms/Section/Projects";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <main>
      {/* {loading && <Loading />} */}
      <Overview />
      <Projects />
    </main>
  );
}
