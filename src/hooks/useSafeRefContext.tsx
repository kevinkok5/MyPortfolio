"use client";
import { useRefContext } from "@/contexts/RefProvider";

export const useSafeRefContext = () => {
    const context = useRefContext();
    if (!context) {
        throw new Error("useRefContext must be used within a RefProvider");
    }
    return context;
};
