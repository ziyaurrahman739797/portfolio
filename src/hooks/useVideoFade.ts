import { useEffect, useRef } from "react";
import { VIDEO_FADE } from "@/utils/constants";

/**
 * Custom fade for the hero background video, implemented with
 * requestAnimationFrame rather than CSS opacity transitions, so the
 * fade-out can be timed precisely against the video's remaining duration
 * (fading out 0.55s before it ends) and the loop restart can resume
 * from whatever opacity the fade-out was interrupted at.
 */
export function useVideoFade(videoRef: React.RefObject<HTMLVideoElement>) {
  const rafId = useRef<number | null>(null);
  const opacity = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelFrame = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const fadeTo = (target: number, durationMs: number) => {
      cancelFrame();
      const start = performance.now();
      const startOpacity = opacity.current;
      const delta = target - startOpacity;

      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / durationMs, 1);
        opacity.current = startOpacity + delta * t;
        video.style.opacity = String(opacity.current);

        if (t < 1) {
          rafId.current = requestAnimationFrame(step);
        } else {
          rafId.current = null;
        }
      };

      rafId.current = requestAnimationFrame(step);
    };

    const handlePlaying = () => {
      fadeTo(1, VIDEO_FADE.fadeInMs);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const remainingMs = (video.duration - video.currentTime) * 1000;
      if (remainingMs <= VIDEO_FADE.fadeOutBeforeEndMs && opacity.current > 0) {
        fadeTo(0, VIDEO_FADE.fadeOutBeforeEndMs);
      }
    };

    const handleEnded = () => {
      cancelFrame();
      window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {
          /* Autoplay can be blocked until user interaction; safe to ignore. */
        });
      }, VIDEO_FADE.restartDelayMs);
    };

    video.style.opacity = "0";
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    video.play().catch(() => {
      /* Some browsers require a user gesture; the video will start on interaction. */
    });

    return () => {
      cancelFrame();
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoRef]);
}
