import Image from "next/image";
import React, { forwardRef } from "react";

type cardProps = {
    id: string;
    frontSrc: string;
    frontAlt: string;
    backText: string;
};

const Card: React.ForwardRefRenderFunction<HTMLDivElement, cardProps> = (
    { id, frontSrc, frontAlt, backText },
    ref
) => {
    return (
        <div className="card" ref={ref} id={id}>
            <div className="card-wrapper">
                <div className="flip-card-inner">
                    <div className="flip-card-front z-[1]">
                        <Image
                            className="w-full h-full object-cover"
                            priority
                            src={frontSrc}
                            width={500}
                            height={500}
                            alt={frontAlt}
                        />
                    </div>
                    <div className="flip-card-back">
                        <p>{backText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default forwardRef<HTMLDivElement, cardProps>(Card);
