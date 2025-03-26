'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

const StaggerExample = () => {
    const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // GSAP timeline with staggered animation
        gsap.to(boxesRef.current, {
            y: 100,
            opacity: 1,
            duration: 4,
            stagger: 0.2, // Delay between each element
        });
    }, []);

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {[1, 2, 3, 4, 5].map((_, index) => (
                <div
                    key={index}
                    ref={(el) => {boxesRef.current[index] = el}}
                    style={{
                        width: "50px",
                        height: "50px",
                        background: "coral",
                    }}
                >
                    Box {index + 1}
                </div>
            ))}
        </div>
    );
};

export default StaggerExample;
