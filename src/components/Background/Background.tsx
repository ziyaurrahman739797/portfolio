import { useRef } from "react";
import { useVideoFade } from "@/hooks/useVideoFade";
import { Particles } from "./Particles";
import { VIDEO_FADE } from "@/utils/constants";

/**
 * Full-screen hero background: muted autoplay looping video (object-cover,
 * shifted down 17%, custom rAF fade — never CSS opacity transitions),
 * layered with slow aurora gradients, a faint noise texture, and particles.
 */
export function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoFade(videoRef);

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transform: `translateY(${VIDEO_FADE.shiftDownPercent}%) scale(1.4)`, opacity: 0 }}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Aurora gradients: very slow, barely-noticeable movement */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[70vh] w-[70vh] animate-float-slow rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "radial-gradient(circle, white, transparent 70%)", animationDuration: "18s" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[60vh] w-[60vh] animate-float-slow rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: "radial-gradient(circle, white, transparent 70%)", animationDuration: "22s" }}
        aria-hidden="true"
      />

      <Particles />

      {/* Scrim for text legibility over video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" aria-hidden="true" />
    </div>
  );
}
