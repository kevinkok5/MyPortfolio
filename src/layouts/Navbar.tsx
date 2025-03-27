"use client";

import CButton from "@/components/CButton";
import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const { navbarRef } = useSafeRefContext();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div ref={navbarRef} className="navbar bg-black text-white">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <h4 className="logo font-light text-sm">
                        KEVIN CHRISTEVI.
                    </h4>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-4">
                        <Link href="#projects">
                            <CButton
                                label="Projects"
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4 font-semibold"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                }
                            />
                        </Link>
                        <Link
                            href="/myResume.pdf"
                            download="Kevin_Mbiya_Kalonda_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CButton
                                label="Show Resume"
                                svg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4 font-semibold"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                }
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden block p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center transition-transform ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <button
                        className="absolute top-5 right-5 p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={30} />
                    </button>

                    <div className="flex flex-col gap-6 text-xl">
                        <Link href="#projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                        <Link
                            href="/myResume.pdf"
                            download="Kevin_Mbiya_Kalonda_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                        >
                            Show Resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
