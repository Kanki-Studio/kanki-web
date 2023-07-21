"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        {
            href: "/projects",
            name: "project",
        },
        {
            href: "/about",
            name: "about",
        },
        {
            href: "/blog",
            name: "blog",
        },
    ];

    return (
        <nav className="w-full p-4 z-50 backdrop-blur-sm bg-black-100 ">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-auto object-cover h-20"
                        />
                    </Link>

                    <div className="hidden flex-row gap-10 text-white xl:flex">
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link.href);
                            return (
                                <Link
                                    href={link.href}
                                    key={link.name}
                                    className={`font-medium uppercase ${isActive ? "text-primary-80" : "text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    <button className="bg-primary-90 hidden text-white transition-all ease-in-out font-medium p-1 w-28  hover:bg-primary-60 xl:block">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
