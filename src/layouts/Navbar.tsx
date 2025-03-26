"use client";

import CButton from "@/components/CButton";
import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import React from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const { navbarRef } = useSafeRefContext();

    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.to(navbarRef.current, {
    //             scrollTrigger: {
    //                 trigger: navbarRef.current,
    //                 start: "10",
    //                 // end: "+=4000",
    //                 // markers: true,
    //                 toggleActions: "play play play reverse",
    //             },
    //             y: -70,
    //             duration: 0.8,
    //         });
    //     });

    //     return () => ctx.revert();
    // }, []);
    return (
        <div ref={navbarRef} className="navbar">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <h4 className="logo font-light text-sm">
                        KEVIN CHRISTEVI.
                    </h4>
                    <div className="flex gap-4">
                        <Link href="#projects">
                            <CButton
                                label={"projects"}
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
                                label={"Show Resume"}
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
