"use client";

import React, {
    createContext,
    useContext,
    useRef,
    MutableRefObject,
    ReactNode,
} from "react";

// Define the type for the context
interface RefContextType {
    navbarRef: MutableRefObject<HTMLDivElement | null>;
    whatWeDo: MutableRefObject<HTMLDivElement | null>;
    videoContainerRef: MutableRefObject<HTMLDivElement | null>;
    videoRef: MutableRefObject<HTMLImageElement | null>;
    bannerRef: MutableRefObject<HTMLDivElement | null>;
    myJourneyRef: MutableRefObject<HTMLDivElement | null>;
    myJourneyFirstSection: MutableRefObject<HTMLDivElement | null>;
    myJourneySecondSection: MutableRefObject<HTMLDivElement | null>;
    projectsfirstSectionRef: MutableRefObject<HTMLDivElement | null>;
    projectsSecondSectionRef: MutableRefObject<HTMLDivElement | null>;
    aboutMeRef: MutableRefObject<HTMLDivElement | null>;
    aboutMeFirstSectionRef: MutableRefObject<HTMLDivElement | null>;
    aboutMeSecondSectionRef: MutableRefObject<HTMLDivElement | null>;
    aboutMeCardsRef: MutableRefObject<HTMLDivElement[] | null>;
}

// Provide a default value of null for the context, but ensure it's typed correctly
const RefContext = createContext<RefContextType | null>(null);

export const useRefContext = () => {
    return useContext(RefContext);
};

// Type the children prop explicitly
interface RefProviderProps {
    children: ReactNode;
}

const RefProvider: React.FC<RefProviderProps> = ({ children }) => {
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLImageElement | null>(null);
    const videoContainerRef = useRef<HTMLDivElement | null>(null);
    const whatWeDo = useRef<HTMLDivElement | null>(null);
    const bannerRef = useRef<HTMLDivElement | null>(null);
    const myJourneyRef = useRef<HTMLDivElement | null>(null);
    const myJourneyFirstSection = useRef<HTMLDivElement | null>(null);
    const myJourneySecondSection = useRef<HTMLDivElement | null>(null);
    const projectsfirstSectionRef = useRef<HTMLDivElement | null>(null);
    const projectsSecondSectionRef = useRef<HTMLDivElement | null>(null);
    const aboutMeRef = useRef<HTMLDivElement | null>(null);
    const aboutMeFirstSectionRef = useRef<HTMLDivElement | null>(null);
    const aboutMeSecondSectionRef = useRef<HTMLDivElement | null>(null);
    const aboutMeCardsRef = useRef<HTMLDivElement[] | null>([]);

    const contextData = {
        navbarRef: navbarRef,
        videoRef: videoRef,
        whatWeDo: whatWeDo,
        videoContainerRef: videoContainerRef,
        bannerRef: bannerRef,
        myJourneyRef: myJourneyRef,
        myJourneyFirstSection: myJourneyFirstSection,
        myJourneySecondSection: myJourneySecondSection,
        projectsfirstSectionRef: projectsfirstSectionRef,
        projectsSecondSectionRef: projectsSecondSectionRef,
        aboutMeRef: aboutMeRef,
        aboutMeFirstSectionRef: aboutMeFirstSectionRef,
        aboutMeSecondSectionRef: aboutMeSecondSectionRef,
        aboutMeCardsRef: aboutMeCardsRef,
    };

    return (
        <RefContext.Provider value={contextData}>
            {children}
        </RefContext.Provider>
    );
};

export default RefProvider;
