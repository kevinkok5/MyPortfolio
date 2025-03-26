"use client";
import React from "react";

// import Video from "next-video";
// import getStarted from "/videos/video-1.mp4";
// import { useSafeRefContext } from "@/hooks/useSafeRefContext";

const WhatWeDo = () => {
    // const { whatWeDo, videoRef, videoContainerRef } = useSafeRefContext();

    return (
        <div className="container what-we-do min-h-[80vh] w-full flex flex-col items-center bg-white py-20">
            <div className="max-w-[750px] text-center flex flex-col gap-4">
                <h1 className="text-neutral-800 text-4xl font-bold">
                    Value in the lives of others.
                </h1>
                <p className="text-neutral-500 font-semibold">
                    I am driven by a desire to improve the lives of others. My
                    passion lies in enhancing user experiences and leading
                    projects towards positive outcomes. I believe in a
                    human-centered approach that unlocks business value by
                    providing genuine customer value.
                </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 text-sm py-20">
                <div>
                    <h1 className="text-neutral-800 text-2xl mb-3 font-extrabold">
                        Work
                    </h1>
                    <p className="text-neutral-500 font-semibold">
                        I am a full-stack developer who builds scalable,
                        high-performance applications by seamlessly integrating
                        frontend and backend technologies. I believe in writing
                        clean, efficient, and maintainable code while ensuring a
                        smooth user experience. Collaboration is at the core of
                        my work—I thrive in team environments, working closely
                        with designers, backend engineers, and stakeholders to
                        translate ideas into impactful digital solutions.
                    </p>
                </div>
                <div>
                    <h1 className="text-neutral-800 text-2xl mb-3 font-extrabold">
                        Strategy
                    </h1>
                    <p className="text-neutral-500 font-semibold">
                        Software development is more than just writing code—it’s
                        about understanding business goals, optimizing user
                        experience, and ensuring long-term scalability. I take a
                        strategic approach by deeply analyzing project
                        requirements, selecting the right technologies (Next.js,
                        Django, GraphQL), and continuously improving systems to
                        align with evolving needs. Staying ahead of industry
                        trends allows me to build future-proof solutions that
                        drive business success.
                    </p>
                </div>
                <div>
                    <h1 className="text-neutral-800 text-2xl mb-3 font-extrabold">
                        Leadership
                    </h1>
                    <p className="text-neutral-500 font-semibold">
                        I believe strong technical leadership comes from
                        mentorship, collaboration, and a problem-solving
                        mindset. I take initiative in guiding teams, fostering a
                        culture of continuous learning, and ensuring best
                        practices in development. By empowering others and
                        sharing knowledge, I contribute to building
                        high-performing teams that deliver exceptional products.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
