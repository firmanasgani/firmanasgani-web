"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  p-6">
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
            className="flex flex-col gap-[30px] w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col items-end px-32"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>Hi, There 👋</span>
              <h1 className="text-4xl font-bold">This Is My Project</h1>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              {[1, 2, 3].map((card, index) => (
                <motion.div
                  key={card}
                  className="max-w-sm rounded overflow-hidden bg-white shadow-lg"
                  style={{ height: "400px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <Image
                    src={`/images/images-${card}.jpg`}
                    alt={`Card Image ${card}`}
                    className="w-full object-cover"
                    width={400}
                    height={200}
                    style={{ height: "200px" }}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2" style={{ height: "50px" }}>
                      {card === 1
                        ? "Aplikasi Whatsapp Notification dan Monitoring"
                        : card === 2
                        ? "Aplikasi Sistem Informasi Manajemen Asset Perusahaan"
                        : "Aplikasi ePassport"}
                    </div>
                    <p className="text-gray-700 text-base">
                      {card === 1
                        ? "Menerima notifikasi lewat whatsapp Business. Monitoring dan melihat data secara real time"
                        : card === 2
                        ? "Memastikan aset perusahaan tetap on track dan mencatat setiap transaksi aset"
                        : "Memastikan Project tetap terjaga mulai dari Memeriksa Vendor Sesuai Standar K3L"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-4 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Want to know about me?{" "}
              <Link href="/about-me" className="ml-2 text-blue-500 hover:underline hover:decoration-sky-500">
                Click Here
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
