"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const TimelineExample = () => {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Infinite loop, reverse on each loop

        tl.to(box1Ref.current, { x: 100, duration: 1 })
            .to(box2Ref.current, { y: 50, duration: 1 })
            .to(box3Ref.current, { rotation: 45, duration: 1 });
    }, []);

    return (
        <div>
            <div
                ref={box1Ref}
                style={{
                    width: "100px",
                    height: "100px",
                    background: "blue",
                    margin: "10px",
                }}
            >
                Box 1
            </div>
            <div
                ref={box2Ref}
                style={{
                    width: "100px",
                    height: "100px",
                    background: "green",
                    margin: "10px",
                }}
            >
                Box 2
            </div>
            <div
                ref={box3Ref}
                style={{
                    width: "100px",
                    height: "100px",
                    background: "yellow",
                    margin: "10px",
                }}
            >
                Box 3
            </div>
        </div>
    );
};

export default TimelineExample;
