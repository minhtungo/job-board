import Link from "next/link";
import { FC } from "react";
import logo from "@/assests/jobboardlogo.png";
import Image from "next/image";
import { Button } from "./ui/button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <header className="shadow-sm">
      <nav className="maw-w-5xl m-auto flex items-center justify-between px-3 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="Logo" />
          <span className="text-xl font-bold tracking-tight">Job Board</span>
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a Job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
