"use client";

import React, { useEffect, useRef, useState } from "react";

const MouseFollow = () => {
    const mouseFollowRef = useRef<HTMLDivElement | null>(null);
    const hoverClassList = [
        "button",
        "logo",
        "interactive-image",
        "mouse-over",
    ];

    const [settings, setSettings] = useState({
        mouseX: 0,
        mouseY: 0,
        xPos: 0,
        yPos: 0,
        speed: 16,
    });

    const cursorWidthRef = useRef<number>(0);
    const cursorHeightRef = useRef<number>(0);

    // // Function for linear interpolation to smoothly move the cursor
    // const lerp = (start: number, end: number, speed: number) => {
    //     return (1 - speed) * start + speed * end;
    // };

    // Animation loop for the smooth follow effect
    const animate = () => {
        setSettings((prevSettings) => {
            const newXPos =
                prevSettings.xPos +
                (prevSettings.mouseX - prevSettings.xPos) / prevSettings.speed;
            const newYPos =
                prevSettings.yPos +
                (prevSettings.mouseY - prevSettings.yPos) / prevSettings.speed;

            if (mouseFollowRef.current !== null) {
                // Smoothly update the cursor position
                mouseFollowRef.current.style.transform = `translate(${
                    newXPos - cursorWidthRef.current / 2
                }px, ${newYPos - cursorHeightRef.current / 2}px)`;
            }

            // Return the updated settings
            return {
                ...prevSettings,
                xPos: newXPos,
                yPos: newYPos,
            };
        });

        // Call the animation loop recursively
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
        setSettings((set) => ({
            ...set,
            mouseX: event.clientX,
            mouseY: event.clientY,
        }));

        const target = event.target as HTMLElement;

        if (
            hoverClassList.some((className) =>
                target.classList.contains(className)
            )
        ) {
            // console.log(target.classList.contains("button"));
            mouseFollowRef.current?.classList.add("hover");
        } else {
            // console.log(target.classList);

            mouseFollowRef.current?.classList.remove("hover");
        }
    };

    useEffect(() => {
        // Add mousemove listener when the component mounts
        window.addEventListener("mousemove", handleMouseMove);

        // Initialize cursor size
        if (mouseFollowRef.current) {
            cursorWidthRef.current = mouseFollowRef.current.offsetWidth;
            cursorHeightRef.current = mouseFollowRef.current.offsetHeight;
        }

        // Start the animation loop
        requestAnimationFrame(animate);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={mouseFollowRef} className="mouse-follow"></div>;
};

export default MouseFollow;
