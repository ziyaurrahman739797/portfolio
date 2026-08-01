import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-white/30 via-white to-white/30"
        style={{ width: `${progress * 100}%`, transition: "width 80ms linear" }}
      />
    </div>
  );
}
