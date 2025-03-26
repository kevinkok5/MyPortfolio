"use client";

import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type cbuttonProps = {
    label: string;
    svg: ReactNode;
    className?: string;
};

const CButton = ({ label, svg, className }: cbuttonProps) => {
    return (
        <Button className={cn("button", className)}>
            {label}
            <span>{svg}</span>
        </Button>
    );
};

export default CButton;
