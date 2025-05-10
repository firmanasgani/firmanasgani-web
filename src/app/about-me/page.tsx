// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/images/image-github.jpg"
          alt="Foto Profil"
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
        <p className="text-gray-700 text-lg text-justify">
          Halo! Saya <strong>Firman Maulana</strong>, seorang Software Engineer
          yang berfokus pada pengembangan aplikasi web dan sistem backend.
          Berpengalaman membangun aplikasi dengan React, NestJS, Laravel, dan
          teknologi modern lainnya.
        </p>
      </div>

      {/* Personal Info */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Informasi Pribadi</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:firmanasgani37@gmail.com" className="text-blue-600">
              firmanasgani37@gmail.com
            </a>
          </li>
          <li>
            <strong>Lokasi:</strong> Jakarta, Indonesia
          </li>
          <li>
            <strong>Github:</strong>{" "}
            <Link href="https://github.com/firmanasgani" className="text-blue-600"
            target="_blank">
              https://github.com/firmanasgani
            </Link>
          </li>
           <li>
            <strong>LinkedIn:</strong>{" "}
            <Link href="https://linkedin.com/in/firmanasgani" className="text-blue-600"    target="_blank">
              https://linkedin.com/in/firmanasgani
            </Link>
          </li>
        </ul>
      </div>

      {/* CV Summary */}
      <div className="mt-10 space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Pendidikan</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Sarjana Informatika</strong> – Universitas Budi Luhur,
              2015–2020
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Pengalaman Kerja</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>System Analyst</strong> – PT Victoria Investama
              (2024–Sekarang)
            </li>
            <li>
              <strong>Web Developer And Analyst</strong> – PT. Bayu Buana Gemilang
              (2020–2024)
            </li>
          </ul>
        </div>

          <div>
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold">Frontend</h4>
              <ul className="list-disc list-inside mt-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>AngularJs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Backend</h4>
              <ul className="list-disc list-inside mt-1">
                <li>NestJS</li>
                <li>Express.js</li>
                <li>Laravel</li>
                <li>Flask</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Database</h4>
              <ul className="list-disc list-inside mt-1">
                <li>MySQL / MariaDB</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">DevOps & Tools</h4>
              <ul className="list-disc list-inside mt-1">
                <li>Docker</li>
                <li>Git & GitHub</li>
                <li>CI/CD (GitHub Actions)</li>
                <li>Cloudflare Zero Trust</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
  <h2 className="text-2xl font-semibold mb-4">GitHub Contribution</h2>

  {/* Contribution Chart */}
  <div className="bg-white shadow rounded-xl p-4 mb-6">
    <h3 className="text-lg font-medium mb-2">Contribution Graph</h3>
    <iframe
      src="https://ghchart.rshah.org/firmanasgani"
      title="GitHub Contributions"
      width="100%"
      height="150"
      className="w-full max-w-xl"
    />
    <p className="text-sm text-gray-500 mt-2">
      Grafik kontribusi tahunan dari GitHub
    </p>
  </div>

  {/* GitHub Stats */}
  <div className="bg-white shadow rounded-xl p-4">  
    <img
      src="https://github-readme-stats.vercel.app/api?username=firmanasgani&show_icons=true&theme=default"
      alt="GitHub Stats"
      className="w-full max-w-xl"
    />
    <p className="text-sm text-gray-500 mt-2">
      Statistik umum dari GitHub: repo, commit, followers
    </p>
  </div>
</div>


      {/* Download CV */}
      {/* <div className="mt-10">
        <a
          href="/cv/firman-asgani.pdf"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Download CV (PDF)
        </a>
      </div> */}
    </section>
  );
}
