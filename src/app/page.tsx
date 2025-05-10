import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-30">
      <main className="row-start-2 flex flex-col sm:flex-row gap-30">
        <div className="flex items-center justify-center">
          <Image
            src="/background.jpg"
            alt="profile"
            className="rounded"
            width={200}
            height={300}
          />
        </div>
        <div className="flex flex-col  justify-center">
          <span>Hi, I am</span>
          <h1 className="text-4xl font-bold">Firman Maulana,</h1>
          <h1 className="text-4xl font-bold">Software Engineer</h1>
          <Link href="/projects" className="hover:underline">
            <span>See My Projects →</span>
          </Link>
        </div>
        
      </main>
      <footer className="row-start-4 flex gap-4 flex-wrap items-center justify-center">
        <Link href="https://github.com/firmanasgani" target="_blank">
          <Image src="/github.svg" alt="github" width={32} height={32} />
        </Link>
        <Link href={"https://linkedin.com/in/firmanasgani"} target="_blank">
          <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} />
        </Link>
        <Link
          href={
            "mailto:firmanasgani37@gmail.com?subject=Saya%20ingin%20bertanya"
          }
        >
          <Image src="/mail.svg" alt="email" width={32} height={32} />
        </Link>
      </footer>
    </div>
  );
}
