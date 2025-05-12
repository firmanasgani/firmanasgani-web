"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const cardBaseClasses = "bg-white shadow-lg rounded-xl mb-8 overflow-hidden";
  const cardHeaderClasses = "bg-gray-700 text-white p-4 rounded-t-xl";
  const cardContentClasses = "p-6";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <motion.section
      className="max-w-4xl mx-auto px-4 py-12 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-8 text-center md:text-left text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        About Me
      </motion.h1>

      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className={cardBaseClasses}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          {index === 0 && (
            <div className={cardContentClasses}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                  src="/images/image-github.jpg"
                  alt="Foto Profil"
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-md flex-shrink-0"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                    Firman Maulana
                  </h2>
                  <p className="text-gray-700 text-lg text-justify">
                    Halo! Saya seorang <strong>Software Engineer</strong> yang
                    berfokus pada pengembangan aplikasi web dan sistem backend.
                    Berpengalaman membangun aplikasi dengan React, NestJS,
                    Laravel, dan teknologi modern lainnya.
                  </p>
                </div>
              </div>
            </div>
          )}

          {index === 1 && (
            <div>
              <div className={cardHeaderClasses}>
                <h2 className="text-xl font-semibold">Informasi Pribadi</h2>
              </div>
              <div className={cardContentClasses}>
                <ul className="text-gray-700 space-y-3">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:firmanasgani37@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      firmanasgani37@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Lokasi:</strong> Jakarta, Indonesia
                  </li>
                  <li>
                    <strong>Github:</strong>{" "}
                    <Link
                      href="https://github.com/firmanasgani"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/firmanasgani
                    </Link>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong>{" "}
                    <Link
                      href="https://linkedin.com/in/firmanasgani"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/firmanasgani
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {index === 2 && (
            <div>
              <div className={cardHeaderClasses}>
                <h2 className="text-xl font-semibold">Ringkasan CV</h2>
              </div>
              <div className={cardContentClasses}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Pendidikan
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>
                        <strong>Sarjana Informatika</strong> – Universitas Budi
                        Luhur (2015–2020)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Pengalaman Kerja
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>
                        <strong>System Analyst</strong> – PT Victoria Investama
                        (2024–Sekarang)
                      </li>
                      <li>
                        <strong>Web Developer And Analyst</strong> – PT. Bayu
                        Buana Gemilang (2020–2024)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                      Tech Stack
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Frontend</h4>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>React.js</li>
                          <li>Next.js</li>
                          <li>Tailwind CSS</li>
                          <li>AngularJs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Backend</h4>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>NestJS</li>
                          <li>Express.js</li>
                          <li>Laravel</li>
                          <li>Flask</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Database</h4>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>MySQL / MariaDB</li>
                          <li>PostgreSQL</li>
                          <li>MongoDB</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          DevOps & Tools
                        </h4>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>Docker</li>
                          <li>Git & GitHub</li>
                          <li>CI/CD (GitHub Actions)</li>
                          <li>Cloudflare Zero Trust</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {index === 3 && (
            <div>
              <div className={cardHeaderClasses}>
                <h2 className="text-xl font-semibold">Aktivitas GitHub</h2>
              </div>
              <div className={cardContentClasses}>
                <div className="mb-6 border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2 text-gray-700">
                    Grafik Kontribusi
                  </h3>
                  <iframe
                    src="https://ghchart.rshah.org/firmanasgani"
                    title="GitHub Contributions"
                    className="w-full max-w-full"
                    style={{ height: "150px" }}
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Grafik kontribusi tahunan dari GitHub.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2 text-gray-700">
                    Statistik Umum
                  </h3>
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=firmanasgani&show_icons=true&theme=default&hide_border=true&bg_color=ffffff00"
                    alt="GitHub Stats"
                    className="w-full max-w-full"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Statistik umum: repositori, commit, pengikut, dll.
                  </p>
                </div>
              </div>
            </div>
          )}

          {index === 4 && (
            <div>
              <div className={cardHeaderClasses}>
                <h2 className="text-xl font-semibold">Unduh CV</h2>
              </div>
              <div className={cardContentClasses + " text-center"}>
                <a
                  href="/cv/firman-maulana.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow hover:shadow-md"
                >
                  Download CV (PDF)
                </a>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
}
