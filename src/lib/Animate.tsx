"use client";

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import { ReactNode, useRef } from "react";

// import SplitType, { TargetElement } from "split-type";

interface animateProps {
    children: ReactNode;
}

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const Animate: React.FC<animateProps> = ({ children }) => {
    // const {
    //     bannerRef,
    //     whatWeDo,
    //     myJourneyRef,
    //     aboutMeRef,
    //     videoRef,
    //     videoContainerRef,
    //     aboutMeFirstSectionRef,
    //     aboutMeSecondSectionRef,
    //     aboutMeCardsRef,
    //     myJourneyFirstSection,
    //     myJourneySecondSection,
    //     projectsfirstSectionRef,
    //     projectsSecondSectionRef,
    // } = useSafeRefContext();
    const mainContainer = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         const cards = aboutMeCardsRef.current;

    //         const positions = [16, 38, 60, 82];
    //         const rotations = [-15, -7.5, 7.5, 15];

    //         const mainTl = gsap.timeline();
    //         const cardsTl = gsap.timeline();

    //         ScrollTrigger.create({
    //             animation: mainTl,
    //             trigger: mainContainer.current,
    //             start: "top 0",
    //             end: "+=18000",
    //             scrub: true,
    //             pin: true,
    //             pinSpacing: false,
    //             markers: true,
    //             anticipatePin: 0,
    //         });

    //         let box = mainTl
    //             .to(
    //                 bannerRef.current,
    //                 {
    //                     ease: "none",
    //                     startAt: { filter: "brightness(100%) blur(0px)" },
    //                     filter: "brightness(1%) blur(150px)",
    //                     scale: 0,
    //                     // borderRadius: 50,
    //                     duration: 2, // Set duration
    //                 },
    //                 0
    //             )
    //             .from(
    //                 whatWeDo.current,
    //                 {
    //                     yPercent: 100,
    //                     duration: 1, // Set duration
    //                 },
    //                 0
    //             )
    //             .from(
    //                 videoContainerRef.current,
    //                 {
    //                     width: "40%",
    //                     duration: 1, // Set duration
    //                 },
    //                 0
    //             )
    //             .from(
    //                 videoRef.current,
    //                 {
    //                     scale: "2.4",
    //                     duration: 1, // Set duration
    //                 },
    //                 0
    //             )
    //             .to(
    //                 whatWeDo.current,
    //                 {
    //                     ease: "none",
    //                     startAt: { filter: "brightness(100%) blur(0px)" },
    //                     filter: "brightness(1%) blur(150px)",
    //                     scale: 0,
    //                     duration: 1, // Set duration

    //                     // borderRadius: 50,
    //                 },
    //                 1
    //             );
    //         if (myJourneyRef.current) {
    //             const header: TargetElement | any =
    //                 myJourneyRef.current.querySelector(".header");

    //             const subHeader: TargetElement | any =
    //                 myJourneyRef.current.querySelector(".sub-header");

    //             const headerSplit = new SplitType(header, {
    //                 types: "words,chars", // You can also split by lines
    //             });
    //             mainTl.from(
    //                 headerSplit.chars,
    //                 {
    //                     opacity: 0,
    //                     // display: "grid",
    //                     // startAt: { filter: "brightness(100%) blur(0px)" },
    //                     filter: "blur(150px)",
    //                     scaleY: 0.3,
    //                     y: -20,
    //                     // transformOrigin: "top",
    //                     duration: 1,
    //                     delay: 0.6,
    //                     stagger: 0.03,

    //                     onStart: () => {
    //                         myJourneyRef.current?.classList.add("grid");
    //                         myJourneyRef.current?.classList.remove("hidden");
    //                     },
    //                 },
    //                 0
    //             );

    //             // const subHeaderSplit = new SplitType(subHeader, {
    //             //     types: "words,chars", // You can also split by lines
    //             // });
    //             // Animate the characters with GSAP
    //             // if (subHeaderSplit) {
    //             mainTl.from(
    //                 subHeader,
    //                 {
    //                     opacity: 0,
    //                     // y: -20,
    //                     // transformOrigin: "top",
    //                     duration: 1,
    //                     // stagger: 0.2,
    //                 },
    //                 1
    //             );
    //             // }
    //         }

    //         mainTl
    //             .from(
    //                 myJourneyFirstSection.current,
    //                 {
    //                     yPercent: 100,
    //                     duration: 1, // Set duration
    //                 },
    //                 1
    //             )
    //             .to(
    //                 myJourneyFirstSection.current,
    //                 {
    //                     ease: "none",
    //                     startAt: { filter: "brightness(100%) blur(0px)" },
    //                     filter: "brightness(1%) blur(150px)",
    //                     scale: 0,
    //                     duration: 1, // Set duration

    //                     // borderRadius: 50,
    //                 },
    //                 2
    //             )
    //             .from(
    //                 myJourneySecondSection.current,
    //                 {
    //                     yPercent: 100,
    //                     duration: 1, // Set duration
    //                 },
    //                 2
    //             )
    //             .to(
    //                 myJourneySecondSection.current,
    //                 {
    //                     ease: "none",
    //                     startAt: { filter: "brightness(100%) blur(0px)" },
    //                     filter: "brightness(1%) blur(150px)",
    //                     scale: 0,
    //                     duration: 1, // Set duration

    //                     // borderRadius: 50,
    //                 },
    //                 3
    //             )
    //             // .to(myJourneyRef.current, { yPercent: -100, duration: 1 }, 3)
    //             .to(
    //                 myJourneyRef.current,
    //                 {
    //                     ease: "none",
    //                     startAt: { filter: "brightness(100%) blur(0px)" },
    //                     filter: "brightness(1%) blur(150px)",
    //                     scale: 0,
    //                     duration: 2, // Set duration

    //                     // borderRadius: 50,
    //                 },
    //                 3
    //             )

    //             // .to(
    //             //     document.querySelector("body"),
    //             //     {
    //             //         backgroundColor: "white",
    //             //         delay: 0.5,
    //             //         duration: 1,
    //             //     },
    //             //     3
    //             // )

    //             // .from(
    //             //     projectsfirstSectionRef.current,
    //             //     {
    //             //         ease: "none",
    //             //         // startAt: { filter: "brightness(100%) blur(0px)" },
    //             //         // filter: "blur(150px)",
    //             //         scale: 0,
    //             //         duration: 1, // Set duration

    //             //         // borderRadius: 50,
    //             //     },
    //             //     3
    //             // )
    //             .from(
    //                 projectsfirstSectionRef.current,
    //                 { yPercent: 140, duration: 1 },
    //                 3
    //             )
    //             .to(
    //                 projectsfirstSectionRef.current,
    //                 { yPercent: -100, duration: 1 },
    //                 4
    //             )
    //             .from(
    //                 projectsSecondSectionRef.current,
    //                 { yPercent: 100, duration: 1 },
    //                 4
    //             )
    //             .from(
    //                 aboutMeFirstSectionRef.current,
    //                 { yPercent: 100, delay: 0.2, duration: 1 },
    //                 5
    //             )
    //             .to(
    //                 aboutMeFirstSectionRef.current,
    //                 { yPercent: -100, delay: 0.2, duration: 1 },
    //                 6
    //             )
    //             .from(
    //                 aboutMeSecondSectionRef.current,
    //                 { yPercent: 100, duration: 1 },
    //                 6
    //             );

    //         cards?.forEach((card, index) => {
    //             mainTl.to(
    //                 card,
    //                 {
    //                     left: `${positions[index]}%`,
    //                     rotation: `${rotations[index]}deg`,
    //                     ease: "none",
    //                     duration: 1,
    //                     id: `spread-${index}`,

    //                     // scrollTrigger: {
    //                     //     trigger: aboutMeSecondSectionRef.current,
    //                     //     start: "top top",
    //                     //     end: `+=800`,
    //                     //     scrub: 0.5,
    //                     //     id: `spread-${index}`,
    //                     // },
    //                 },
    //                 6
    //             );
    //         });
    //         cards?.forEach((card, index) => {
    //             const frontEl = card.querySelector(".flip-card-front");
    //             const backEl = card.querySelector(".flip-card-back");

    //             if (frontEl && backEl) {
    //                 const staggerOffset = index * 0.05;
    //                 const startOffset = 1 / 3 + staggerOffset;
    //                 const endOffset = 2 / 3 + staggerOffset;

    //                 // Card flip animation, controlled by the main timeline progress
    //                 mainTl.to(
    //                     frontEl,
    //                     {
    //                         rotateY: -180,
    //                         duration: 1 + index * 1.5,
    //                         ease: "power1.out",
    //                     },
    //                     7
    //                 );

    //                 mainTl.to(
    //                     backEl,
    //                     {
    //                         rotateY: 0,
    //                         duration: 1 + index * 1.5,
    //                         ease: "power1.out",
    //                     },
    //                     7
    //                 );

    //                 mainTl.to(
    //                     card,
    //                     {
    //                         xPercent: -50,
    //                         yPercent: -50,
    //                         rotate: rotations[index] * 0.05,
    //                         duration: 1 + index * 0.3,
    //                         ease: "power1.out",
    //                     },
    //                     7
    //                 );

    //                 // mainTl.to()
    //             }
    //         });

    //         // Smooth scrolling functionality
    //         // const links = document.querySelectorAll("a[href^='#']");
    //         // links.forEach((link) => {
    //         //     link.addEventListener("click", (e) => {
    //         //         e.preventDefault();
    //         //         const targetId = link.getAttribute("href");
    //         //         if (targetId) {
    //         //             const targetSection = document.querySelector(targetId);
    //         //             console.log(targetSection);

    //         //             if (targetSection) {
    //         //                 const targetPosition = targetSection.offsetTop; // Get the top position of the section

    //         //                 gsap.to(window, {
    //         //                     scrollTo: {
    //         //                         y: targetPosition, // Use the offsetTop value
    //         //                         autoKill: true,
    //         //                     },
    //         //                     duration: 1.5,
    //         //                     ease: "power2.inOut",
    //         //                 });
    //         //             }
    //         //         }
    //         //     });
    //         // });

    //         // cards?.forEach((card, index) => {
    //         //     const fronteEl = card.querySelector(".flip-card-front");
    //         //     const backEl = card.querySelector(".flip-card-back");

    //         //     const staggerOffset = index * 0.05;
    //         //     const startOffset = 1 / 3 + staggerOffset;
    //         //     const endOffset = 2 / 3 + staggerOffset;

    //         //     ScrollTrigger.create({
    //         //         trigger: aboutMeSecondSectionRef.current,
    //         //         start: "top top",
    //         //         end: () => `+=5000`,
    //         //         scrub: 1,
    //         //         id: `rotate-flip-${index}`,
    //         //         onUpdate: (self) => {
    //         //             const progress = self.progress;
    //         //             if (progress >= startOffset && progress <= endOffset) {
    //         //                 const animationProgress =
    //         //                     (progress - startOffset) / (1 / 3);
    //         //                 const frontRotation = -180 * animationProgress;
    //         //                 const backRotation = 180 - 180 * animationProgress;
    //         //                 const cardRotation =
    //         //                     rotations[index] * (1 - animationProgress);

    //         //                 mainTl.to(
    //         //                     fronteEl,
    //         //                     {
    //         //                         rotateY: frontRotation,
    //         //                         ease: "power1.out",
    //         //                         duration: 1,
    //         //                     },
    //         //                     5
    //         //                 );
    //         //                 mainTl.to(
    //         //                     backEl,
    //         //                     {
    //         //                         rotateY: backRotation,
    //         //                         ease: "power1.out",
    //         //                         duration: 1,
    //         //                     },
    //         //                     5
    //         //                 );
    //         //                 mainTl.to(
    //         //                     card,
    //         //                     {
    //         //                         xPercent: -50,
    //         //                         yPercent: -50,
    //         //                         rotate: cardRotation,
    //         //                         ease: "power1.out",
    //         //                         duration: 1,
    //         //                     },
    //         //                     5
    //         //                 );
    //         //             }
    //         //         },
    //         //         // markers: true,
    //         //         // anticipatePin: 0,
    //         //     });

    //         //     // cardsTl.to(
    //         //     //     card,
    //         //     //     {
    //         //     //         // scrollTrigger: {
    //         //     //         //     trigger: aboutMeSecondSectionRef.current,
    //         //     //         //     start: "top top",
    //         //     //         //     end: `+=800`,
    //         //     //         //     scrub: 0.5,
    //         //     //         //     id: `spread-${index}`,
    //         //     //         // },
    //         //     //     },
    //         //     //     4
    //         //     // );
    //         // });

    //         // mainTl.add(cardsTl, "+=0");
    //     }, []);
    //     return () => ctx.revert();
    // }, []);

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

    // words.forEach((word, index) => {
    //     let tl = gsap.timeline({ yoyo: true });

    //     tl.to(textRef.current, {
    //         duration: 3,
    //         text: word,
    //         repeatDelay: 3,
    //     });
    //     if (index !== words.length - 1) {
    //         tl.to(textRef.current, {
    //             duration: 3,
    //             text: { value: "", rtl: true }, // Clear the text (backspace effect)
    //             repeatDelay: 3,
    //         });
    //     }
    //     masterTl.add(tl);
    // });

    return (
        <div ref={mainContainer} className="">
            {children}
        </div>
    );
};

export default Animate;
