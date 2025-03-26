import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { modalProps, projectsDataProps } from "@/layouts/Projects";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

type projectModalProps = {
    modal: modalProps;
    projects: projectsDataProps[];
};

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: {
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

const index: React.FC<projectModalProps> = ({ modal, projects }) => {
    const { active, index } = modal;
    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const moveContainerX = gsap.quickTo(containerRef.current, "left", {
                duration: 0.8,
                ease: "power3",
            });
            const moveContainerY = gsap.quickTo(containerRef.current, "top", {
                duration: 0.8,
                ease: "power3",
            });

            window.addEventListener("mousemove", (e) => {
                const { clientX, clientY } = e;
                moveContainerX(clientX);
                moveContainerY(clientY);
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <motion.div
            variants={scaleAnimation}
            initial="intial"
            animate={active ? "open" : "closed"}
            className={styles.modalContainer}
            ref={containerRef}
        >
            <div
                style={{ top: index * -100 + "%" }}
                className={styles.modalSlider}
            >
                {projects.map((project, index) => {
                    const { src, color } = project;
                    return (
                        <div
                            key={`modal_${index}`}
                            style={{ backgroundColor: color }}
                            className={styles.modal}
                        >
                            <Image
                                src={src}
                                width={250}
                                height={0}
                                alt="project image"
                            />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default index;
