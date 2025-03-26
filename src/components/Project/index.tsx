import { modalProps } from "@/layouts/Projects";
import React from "react";
import styles from "./style.module.css";

type projectProps = {
    index: number;
    title: string;
    description: string;
    rolePlayed: string;
    setModal: React.Dispatch<React.SetStateAction<modalProps>>;
};

const index: React.FC<projectProps> = ({
    index,
    title,
    description,
    rolePlayed,
    setModal,
}) => {
    return (
        <div
            className={`${styles.project} mouse-over bg-[#161617] rounded-xl  flex flex-col p-8 h-full cursor-pointer`}
            onMouseEnter={() => {
                setModal({ active: true, index: index });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index: index });
            }}
        >
            <h2 className="mouse-over text-slate-100">{title}</h2>
            <p className="mouse-over text-slate-500">{rolePlayed}</p>
            <p className="mouse-over">{description}</p>
        </div>
    );
};

export default index;
