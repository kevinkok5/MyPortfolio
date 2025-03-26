// components/SplitText.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useSafeRefContext } from "@/hooks/useSafeRefContext";

interface SplitTextProps {
    text: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const { aboutMeFirstSectionRef } = useSafeRefContext();

    useEffect(() => {
        if (textRef.current) {
            // Split the text into characters using SplitType
            const split = new SplitType(textRef.current, {
                types: "words,chars", // You can also split by lines
            });

            // Animate the characters with GSAP
            gsap.from(
                split.chars,

                {
                    scrollTrigger: {
                        trigger: aboutMeFirstSectionRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        markers: false,
                    },
                    scaleY: 1,
                    y: -20,
                    transformOrigin: "top",
                    // duration: 0.6,
                    stagger: 0.1,
                }
            );
        }
    }, [text]);

    return <div ref={textRef}>{text}</div>;
};

export default SplitText;
