import React from "react";

type HeaderProps = {
    header: string;
    subheader: string;
};
const Heading = ({ header, subheader }: HeaderProps) => {
    return (
        <h1 className="heading text-9xl">
            {header}
            <span>{subheader}</span>
        </h1>
    );
};

export default Heading;
