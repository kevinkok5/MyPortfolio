"use client";

import TypewriterAnimation from "@/components/TypewriterAnimation";
import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
    const { bannerRef, videoRef } = useSafeRefContext();

    useEffect(() => {
        // const text = new SplitType("#hero-text", { types: "chars" });
        // const chars = text.chars;

        const tl = gsap.timeline();

        // Initial animations
        tl.fromTo(
            ".nav-item",
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
            }
        )
            // .fromTo(
            //     chars,
            //     { y: 100, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         stagger: 0.05,
            //         duration: 1,
            //         ease: "power4.out",
            //     },
            //     "-=0.5"
            // )
            .fromTo(
                ".hero-description",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.5"
            )
            .fromTo(
                ".social-links a",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.5"
            );

        // Scroll animations
        gsap.to(".scroll-indicator", {
            y: 20,
            repeat: -1,
            duration: 1.5,
            ease: "power1.inOut",
            yoyo: true,
        });

        // Section animations
        const sections = ["about", "work", "blog", "contact"];
        sections.forEach((section) => {
            gsap.fromTo(
                `#${section} .animate-in`,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: `#${section}`,
                        start: "top center+=100",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            // if (text) text.revert();
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const tl = gsap.timeline();

    //         ScrollTrigger.create({
    //             animation: tl,
    //             trigger: videoRef.current,
    //             start: "top top",
    //             end: "+=4000",
    //             scrub: true,
    //             pin: true,
    //             markers: true,
    //             anticipatePin: 1,
    //         });

    //         let box = tl.to(bannerRef.current, {
    //             ease: "none",
    //             startAt: { filter: "brightness(100%) blur(0px)" },
    //             filter: "brightness(50%) blur(10px)",
    //             scale: 0.6,
    //             // borderRadius: 50,
    //         });
    //     });
    //     return () => ctx.revert();
    // }, []);

    // const handleScrollTo = (target: string) => {
    //     gsap.to(window, {
    //         scrollTo: { y: target, autoKill: true }, // Smooth scroll to the section
    //         duration: 1, // Adjust the duration for smoother scroll
    //         ease: "power2.inOut",
    //     });
    // };

    return (
        <div
            ref={bannerRef}
            className="banner !min-h-screen overflow-hidden relative bg-neutral-950"
        >
            <div className="container flex gap-4 flex-col justify-center items-center pb-16">
                <div className="w-40 h-40 bg-white rounded-full overflow-hidden">
                    <Image
                        src="/assets/profile.jpeg"
                        alt="profile image"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full scale-150"
                    />
                </div>

                <div className="content flex flex-col text-center items-center">
                    <div className="">
                        <TypewriterAnimation />
                    </div>
                    {/* <span>Hi There Again👋</span> */}
                    <h1 className="title">I'm Kevin</h1>
                    <p className="text-white font-bold">
                        An experienced full-stack developer.
                    </p>
                    <p className="sub-title font-semibold text-base mt-6 !text-slate-500">
                        This portfolio showcases my design experience, methods,
                        and outcomes in crafting exceptional user experiences.
                    </p>
                    {/* <a
                        href="#my-journey"
                        // onClick={() => handleScrollTo("#about-me")}
                    >
                        <span className="!text-violet-600 !font-normal cursor-pointer mouse-over hover:underline">
                            learn more{" "}
                        </span>
                    </a> */}
                    <div className="mt-4 social-links flex justify-center gap-6">
                        <a
                            href="https://github.com/kevinkok5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://x.com/KChristevi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kevin-christevi-2767ba301"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                    <div className="scroll-indicator w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
