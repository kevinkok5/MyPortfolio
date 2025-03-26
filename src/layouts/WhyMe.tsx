import React from "react";
// import { projectsDataProps } from "./Projects";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import CButton from "@/components/CButton";

export type WhyChoseMeProps = {
    description: string;
};

const WhyMe = () => {
    const softSkills: string[] = [
        "Problem-Solving",
        "Critical Thinking",
        "Communication",
        "Teamwork",
        "Adaptability",
        "Creativity",
        "Attention to Detail",
        "Curiosity",
        "Self-Motivation",
        "Accountability",
        "Decision-Making",
        "Active Listening",
        "Conflict Resolution",
        "Continuous Learning",
    ];
    return (
        <section className="container min-h-screen bg-[#0D0D0D] flex flex-col py-20 gap-12">
            <div className="flex flex-col items-center gap-6">
                <div className="max-w-[550px] text-center flex flex-col gap-2">
                    <h1 className="text-neutral-100 font-extrabold text-4xl mb-4">
                        Why Me?
                    </h1>
                    <h3 className="text-neutral-300 font-extrabold text-xl">
                        Senior UX Design Lead
                    </h3>
                    <p className="text-neutral-500 font-medium">
                        I deliver scalable, high-performance applications using
                        React.js, Next.js, python, Django and RESTful API. I
                        have a proven track record of building complex systems,
                        from e-commerce to real-time platforms. With strong
                        problem-solving skills, adaptability, and a deep
                        understanding of both frontend and backend architecture,
                        I build efficient, user-centric solutions that drive
                        business success. Plus, I stay ahead of industry trends,
                        ensuring the tech stack remains modern and optimized.
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center max-w-[550px]">
                    {softSkills.map((softSkill, index) => (
                        <p
                            key={`softSkill_${index}`}
                            className="text-neutral-500 font-semibold text-sm px-4 py-2 border border-neutral-800 rounded-[6px]"
                        >
                            {softSkill}
                        </p>
                    ))}
                </div>
            </div>
            <div className="h-[30vh] flex flex-col gap-6 justify-center items-center rounded-2xl bg-[#161617]">
                <div className="w-fit text-center">
                    <h1 className="text-4xl font-bold">Resumer</h1>
                    <p>Read more about my experience.</p>
                </div>

                <Link
                    href="/myResume.pdf"
                    download="Kevin_Mbiya_Kalonda_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CButton
                        className="!text-semibold flex gap-2"
                        label={"Show resumer"}
                        svg={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4 font-semibold"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        }
                    />
                </Link>
            </div>
        </section>
    );
};

export default WhyMe;
