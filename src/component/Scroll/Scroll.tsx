import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll(props: { children: ReactNode }) {
  const { children } = props;
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div id="scroll-container">{children}</div>;
}
