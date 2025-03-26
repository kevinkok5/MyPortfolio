"use client";
import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import Image from "next/image";
import React from "react";
const MyJourney = () => {
    const { myJourneyRef, myJourneyFirstSection, myJourneySecondSection } =
        useSafeRefContext();

    return (
        <>
            <div
                ref={myJourneyRef}
                id="my-journey"
                className="my-journey h-screen w-full opacity-1 hidden overflow-y-auto !absolute top-0 z-30"
            >
                <div className="content container h-full flex items-center justify-center">
                    <h1 className="header text-7xl text-white font-extrabold uppercase tracking-[3px]">
                        I freeze moments
                    </h1>
                    <div className="w-1/4 absolute right-5 bottom-5">
                        <p className="sub-header">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reprehenderit aut officia commodi repellendus
                            velit! Laboriosam porro quos et vitae, optio omnis
                            molestiae voluptas, dolor impedit maxime aut
                        </p>
                    </div>
                </div>
            </div>
            {/* <div> */}
            <div
                ref={myJourneyFirstSection}
                className="my-journey w-screen h-screen !absolute top-0 z-20"
            >
                <div className="container h-full flex place-items-center">
                    <div className="image-container ml-44 w-[26%] rounded-2xl overflow-hidden relative aspect-[9/12] bg-white">
                        <Image
                            src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764523_1280.jpg"
                            alt="kevin"
                            width={640}
                            height={640}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div
                ref={myJourneySecondSection}
                className="my-journey w-screen h-screen !absolute top-0 z-20"
            >
                <div className="container h-full flex justify-end items-center">
                    <div className="image-container mr-44 w-[26%] rounded-2xl overflow-hidden relative aspect-[9/12] bg-white">
                        <Image
                            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1728989022~exp=1728992622~hmac=04d953d5b3713160e5b94cc9c533ddb9db872d7b1ef6e8692b19d16d04cc7c54&w=900"
                            alt="kevin"
                            width={640}
                            height={640}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="h-screen"></div> */}
            {/* </div> */}
        </>
    );
};

export default MyJourney;
