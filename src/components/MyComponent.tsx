'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MyComponent = () => {
    const boxRef = useRef(null);

    useEffect(() => {
        // GSAP animation
        gsap.to(boxRef.current, { rotation: 360, x: 100, duration: 2 });
    }, []);

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: "100px", height: "100px", background: "red" }}
            >
                Rotate me!
            </div>
        </div>
    );
};

export default MyComponent;
