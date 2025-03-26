import React from "react";

const OtherTools = () => {
    const toolsUsed = [
        {
            title: "Next.js",
            description:
                "Built high-performance, SEO-friendly web apps with SSR, SSG, API routes, and image optimization.",
        },
        {
            title: "Django",
            description:
                "Developed scalable backends, RESTful APIs with DRF, and integrated GraphQL for efficient data querying.",
        },
        {
            title: "GraphQL",
            description:
                "Created flexible APIs to reduce over-fetching and improve data fetching efficiency in Next.js and Django apps.",
        },
        {
            title: "Django Channels",
            description:
                "Implemented real-time features like WebSockets for chat, notifications, and live updates in marketplaces.",
        },
        {
            title: "TypeScript",
            description:
                "Ensured type safety and maintainability in Next.js projects by catching errors early and improving DX.",
        },
        {
            title: "PostgreSQL",
            description:
                "Managed large datasets efficiently with optimized queries, indexing, and JSONB for flexible storage.",
        },
        {
            title: "Tailwind CSS",
            description:
                "Designed modern, responsive UI components with utility-first styling for fast and maintainable development.",
        },
        {
            title: "GSAP",
            description:
                "Created smooth animations and scroll-based interactions using GSAP and ScrollTrigger for engaging UIs.",
        },
        {
            title: "Redis",
            description:
                "Optimized caching and session management, reducing database load and improving application performance.",
        },
    ];

    return (
        <div className="py-20 bg-white">
            <div
                // ref={projectsfirstSectionRef}
                className="projects flex flex-col"
            >
                <div className="flex mb-16 container">
                    <p className="w-full max-w-[600px] text-neutral-600 font-semibold text-4xl">
                        I have built{" "}
                        <span className="text-neutral-900">
                            scalable and high-performance
                        </span>{" "}
                        applications using modern tools like:
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
            <div>
                <div className="container h-full w-full flex flex-col items-center justify-center relative ">
                    <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                        {toolsUsed.map((tool, index) => {
                            return (
                                <div
                                    key={`toolUsed_${index}`}
                                    className="bg-[#ffffff] border border-neutral-300 rounded-xl  flex flex-col p-8"
                                >
                                    <h2 className="text-neutral-900 font-bold text-lg">
                                        {tool.title}
                                    </h2>

                                    <p className="text-neutral-500 text-sm font-semibold">
                                        {tool.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherTools;
