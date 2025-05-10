import Image from "next/image";

const Header = () => {
    return (
        <header className="flex justify-around p-4">
            <div className="font-bold font-2xl">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={32}
                    height={32}
                />
            </div>
            <nav className="flex space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/projects" className="hover:underline">Projects</a>
                <a href="/about-me" className="hover:underline">About Me</a>
            </nav>
        </header>
    );
}

export default Header