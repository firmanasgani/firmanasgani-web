import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col p-30 justify-center gap-30">
      <div className="flex flex-col items-end">
        <span>Hi, There 👋</span>
        <h1 className="text-4xl font-bold">This Is My Project</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="max-w-sm rounded overflow-hidden bg-white shadow-lg"
            style={{ height: "400px" }}
          >
            <Image
              src={`/images/images-${card}.jpg`}
              alt={`Card Image ${card}`}
              className="w-full h-full object-cover"
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
              <div >
                <p className="text-gray-700 text-base">
                  {card === 1
                    ? "Menerima notifikasi lewat whatsapp Business. Monitoring dan melihat data secara real time"
                    : card === 2
                    ? "Memastikan aset perusahaan tetap on track dan mencatat setiap transaksi aset"
                    : "Memastikan Project tetap terjaga mulai dari Memeriksa Vendor Sesuai Standar K3L"}
                </p>
              </div>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
              <Link
                href="#"
                className="hover:underline hover:decoration-sky-500"
              >
                <span className="text-sm text-blue-500">View Details</span>
              </Link>
            </div> */}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        Want to know about me?{" "}
        <Link href="/about-me" className="hover:underline hover:decoration-sky-500">
          <span className="text-blue-500">Click Here</span>
        </Link>
      </div>
      {/* <div className="mt-4 flex justify-center">
        <button className="text-blue-500 hover:underline">View All</button>
      </div> */}
    </div>
  );
}
