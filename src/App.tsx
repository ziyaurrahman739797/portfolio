import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "@/components/Loader/Loader";
import { Navbar } from "@/components/Navbar/Navbar";
import { Spotlight } from "@/components/Cursor/Spotlight";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { Home } from "@/pages/Home";
import { useLenis } from "@/hooks/useLenis";
import { pageTransition } from "@/animations/transitions";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
            <ScrollProgressBar />
            <Navbar />
            <Spotlight />
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
