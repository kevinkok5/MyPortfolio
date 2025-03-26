"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the plugin
gsap.registerPlugin(TextPlugin);

const TypewriterAnimation = () => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const words = ["Hi there again 👋.", "Bonjour 👋."];

    useEffect(() => {
        // let textm = gsap.matchMedia(textRef);
        // const t/l = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // Timeline repeats infinitely with a delay

        let ctx = gsap.context(() => {
            // let cursor = gsap.to(cursorRef.current, {
            //     opacity: 0,
            //     ease: "power2.inOut",
            //     repeat: -1,
            // });
            // let boxTl = gsap.timeline();

            // boxTl
            //     // .to(boxRef.current, {
            //     //     duration: 1,
            //     //     width: "23vw",
            //     //     delay: 0.5,
            //     //     ease: "power4.inOut",
            //     // })
            //     .from(hiRef.current, {
            //         duration: 1,
            //         y: "7vw",
            //         ease: "power3.out",
            //         onComplete: () => {
            //             masterTl.play();
            //         },
            //     })
            //     .to(boxRef.current, {
            //         duration: 1,
            //         height: "7vw",
            //         ease: "elastic.out",
            //     });

            // let masterTl = gsap.timeline({ repeat: 0 }).pause();
            let masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            words.forEach((word, index) => {
                let tl = gsap.timeline({ yoyo: true });

                tl.to(textRef.current, {
                    duration: 3,
                    text: word,
                    repeatDelay: 3,
                });
                if (index !== words.length - 1) {
                    tl.to(textRef.current, {
                        duration: 3,
                        text: { value: "", rtl: true }, // Clear the text (backspace effect)
                        repeatDelay: 3,
                    });
                }
                masterTl.add(tl);
            });
        });

        // // Step 1: Type "Hi, I am a developer"
        // tl.to(textRef.current, {
        //     text: "Hi, I am a developer",
        //     duration: 3,
        //     ease: "power2",
        //     onStart() {
        //         if (textRef.current) textRef.current.textContent = "";
        //     },
        // });

        // // Step 2: Pause for 1 second
        // tl.to({}, { duration: 1 });

        // // Step 3: Backspace delete effect - letter by letter
        // tl.to(textRef.current, {
        //     duration: 1.5,
        //     ease: "power2",
        //     onUpdate() {
        //         const currentText = textRef.current?.textContent || "";
        //         if (currentText.length > 0 && textRef.current) {
        //             textRef.current.textContent = currentText.substring(
        //                 0,
        //                 currentText.length - 1
        //             ); // Delete one letter at a time
        //         }
        //     },
        //     repeat: "Hi, I am a developer".length, // Delete all characters
        //     repeatDelay: 0.05, // Delay between each backspace
        // });

        // // Step 4: Type "Hi, I am Kevin"
        // tl.to(textRef.current, {
        //     text: "Hi, I am Kevin",
        //     duration: 2.5,
        //     ease: "power2",
        // });

        return () => ctx.revert(); // <-- CLEANUP!
    }, []);

    return (
        <>
            {/* <h1
                ref={headingRef}
                style={{
                    fontSize: "6vw",
                    position: "relative",
                    fontFamily: "monospace",
                    paddingLeft: "15vh",
                    fontWeight: "bold",
                    // whiteSpace: "nowrap",
                    overflow: "hidden",
                    // backgroundColor: "red",
                    // borderRight: "2px solid",
                    // width: "fit-content",
                }}
            > */}
            {/* <span
                    className="absolute bottom-0 inline-block  bg-[#2800ad] h-[1vh] -z-[1] "
                    ref={boxRef}
                ></span>
                <span className="inline-block" ref={hiRef}>
                    Hi, I'm&nbsp;
                </span> */}
            <span className="text" ref={textRef}></span>
            <span className="cursor" ref={cursorRef}>
                _
            </span>
            {/* </h1> */}
        </>
    );
};

export default TypewriterAnimation;
