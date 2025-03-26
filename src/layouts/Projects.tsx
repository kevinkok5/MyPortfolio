"use client";

import Project from "@/components/Project/index";
import { ProjectDescriptionNotCreatedYetDialog } from "@/components/ProjectDescriptionNotCreatedYetDialog";
import ProjectModal from "@/components/projectModal/index";
import { useSafeRefContext } from "@/hooks/useSafeRefContext";
import { Orbitron } from "next/font/google";
import React, { useState } from "react";
// import  Project  from "@layouts/Project/index";

export const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export type modalProps = { active: boolean; index: number };
export type projectsDataProps = {
    title: string;
    src: string;
    color: string;
    description: string;
    rolePlayed: string;
};
// export type ProjectsDataProps = { }
const Projects = () => {
    const { projectsfirstSectionRef, projectsSecondSectionRef } =
        useSafeRefContext();
    const projects: projectsDataProps[] = [
        {
            title: "UrbanFurn",
            src: "/assets/urbanfurn.png",
            color: "#FFDDAB",
            rolePlayed: "Designed & developed",

            description: "A Furniture E-commerce",
        },
        {
            title: "MarketPlace",
            src: "/assets/marketplace.png",
            color: "#8c8c8c",
            rolePlayed: "Designed & developed",

            description: "An online market-place",
        },
        {
            title: "Horizon",
            src: "/assets/Horizon.png",
            color: "#3f3803",
            rolePlayed: "Developed",

            description:
                "A SaaS platform that allow users to display transactions, transfer money, and manages finances.",
        },
        {
            title: "Portfolio",
            src: "/assets/portfolio.png",
            color: "#706046",
            rolePlayed: "Designed & developed",
            description: "A portfolio showcasing my design experience",
        },
        {
            title: "DevSearch",
            src: "/assets/devsearch.png",
            color: "#3f3803",
            rolePlayed: "Developed",
            description:
                "An online platform where developers can connect and collaborate with others",
        },
        {
            title: "Villa24",
            src: "/assets/villa24.png",
            color: "#706046",
            rolePlayed: "Designed & developed",
            description: "A property search engine",
        },
    ];

    const [modal, setModal] = useState<modalProps>({ active: false, index: 0 });
    return (
        <div id="projects" className="py-20 bg-[#0D0D0D]">
            <div
                // ref={projectsfirstSectionRef}
                className="projects flex flex-col"
            >
                <div className="flex mb-16 container">
                    <p className="w-full max-w-[600px] text-slate-500 font-semibold text-4xl">
                        I’ve worked as a{" "}
                        <span className="text-neutral-300">
                            Junior Full-stack
                        </span>{" "}
                        and in design leadership roles for:
                    </p>

                    {/* <p className="w-[35%] text-xl text-black font-extrabold">
                        Helping brands to stand out in the digital era. Together
                        we will set the new status quo. No nonsense, always on
                        the cutting edge. The combination of my passion for
                        design, code & interaction positions me in a unique
                        place in the web design world.
                    </p> */}
                    {/* <p className="w-[25%] text-neutral-500 py-28">
                        The combination of my passion for design, code &
                        interaction positions me in a unique place in the web
                        design world.
                    </p> */}
                </div>
                {/* <div className="w-full flex justify-center">
                    <h1 className="text-[89px] text-black font-medium">
                        PROJECTS
                    </h1>
                    <div className="w-60 h-60 flex px-4 flex-col justify-between">
                        <p className="font-bold text-4xl">4</p>
                        <ArrowBigDown className="self-end w-44 text-black bg-black h-60" />
                    </div>
                </div> */}
            </div>
            <div ref={projectsSecondSectionRef}>
                <div className="container h-full w-full flex flex-col items-center justify-center relative ">
                    <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                        {projects.map((project, index) => {
                            return (
                                <ProjectDescriptionNotCreatedYetDialog
                                    key={`project_${index}`}
                                >
                                    <Project
                                        index={index}
                                        title={projects[index].title}
                                        description={
                                            projects[index].description
                                        }
                                        rolePlayed={projects[index].rolePlayed}
                                        setModal={setModal}
                                    />
                                </ProjectDescriptionNotCreatedYetDialog>
                            );
                        })}
                    </div>
                    <ProjectModal modal={modal} projects={projects} />
                </div>
            </div>
        </div>
    );
};

export default Projects;
