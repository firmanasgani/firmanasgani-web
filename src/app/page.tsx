"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 detik loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center scrollbar-hide">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-gray-600">Loading...</p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="flex flex-col items-center justify-center gap-[30px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <main className="flex flex-col sm:flex-row gap-[30px] items-center">
              <div className="flex justify-center">
                <Image
                  src="/background.jpg"
                  alt="Firman Maulana Profile Picture"
                  className="rounded"
                  width={200}
                  height={300}
                />
              </div>
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span>Hi, I am</span>
                <h1 className="text-4xl font-bold">Firman Maulana,</h1>
                <h1 className="text-4xl font-bold">Software Engineer</h1>
                <Link href="/projects" className="hover:underline transition duration-300">
                  <span>See My Projects →</span>
                </Link>
              </motion.div>
            </main>

            <footer className="flex gap-4 flex-wrap items-center justify-center">
              <Link href="https://github.com/firmanasgani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Image src="/github.svg" alt="GitHub" width={32} height={32} />
              </Link>
              <Link href="https://linkedin.com/in/firmanasgani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
              </Link>
              <Link href="mailto:firmanasgani37@gmail.com?subject=Saya%20ingin%20bertanya" aria-label="Email">
                <Image src="/mail.svg" alt="Email" width={32} height={32} />
              </Link>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
