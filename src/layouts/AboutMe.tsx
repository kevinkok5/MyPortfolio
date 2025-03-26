"use client";

import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Card from "@/components/Card";
import SplitText from "@/components/SplitText";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const {
        aboutMeRef,
        aboutMeFirstSectionRef,
        aboutMeSecondSectionRef,
        aboutMeCardsRef,
    } = useSafeRefContext();
    // const aboutMeDescriptionRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.to(aboutMeDescriptionRef.current, {
    //             scrollTrigger: {
    //                 trigger: aboutMeRef.current,
    //                 start: "top",
    //                 // end: "bottom 40%",
    //                 pin: true,
    //             },
    //             x: 0,
    //             y: 0,
    //             duration: 1,
    //         });
    //     });

    //     return () => ctx.revert();
    // }, []);

    return (
        <>
            <section
            // ref={aboutMeFirstSectionRef}
            // id="#about-me"
            // className="about-me hero"
            >
                <div className="container">
                    {/* <SplitText text="keep scrolling to reveal the cards" /> */}
                    <h1>
                        keep scrolling to <br /> reveal the cards
                    </h1>
                </div>
            </section>
            <section
            // ref={aboutMeSecondSectionRef} className="about-me cards"
            >
                <div className="container">
                    {[...Array(4)].map((_, index) => {
                        return (
                            <Card
                                key={index}
                                id={`card-${index}`}
                                frontSrc="/kevin-card-1.png"
                                frontAlt="Card Image"
                                backText="Your card details appear here."
                                ref={(el) => {
                                    if (aboutMeCardsRef.current && el) {
                                        aboutMeCardsRef.current[index] = el;
                                    }
                                }}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default AboutMe;
