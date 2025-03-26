'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollAnimation = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const box = boxRef.current;
            if (box !== null) {
                // Null check before accessing the box
                const boxPosition = box.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (boxPosition < screenPosition) {
                    gsap.to(box, { opacity: 1, y: 0, duration: 1 });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{ height: "150vh", paddingTop: "50vh" }}>
            <div
                ref={boxRef}
                style={{
                    width: "100px",
                    height: "100px",
                    background: "purple",
                    opacity: 0,
                    transform: "translateY(50px)",
                }}
            >
                Scroll to See Me
            </div>
        </div>
    );
};

export default ScrollAnimation;
