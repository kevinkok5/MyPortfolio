import { InfiniteScroll } from "@/components/InfiniteScroll";
import MouseFollow from "@/components/MouseFollow";
// import TimelineExample from "@/components/TimeLineExample";

import Banner from "@/layouts/Banner";

import Navbar from "@/layouts/Navbar";
import OtherTools from "@/layouts/OtherTools";
import Projects from "@/layouts/Projects";
import WhatWeDo from "@/layouts/WhatWeDo";
import WhyMe from "@/layouts/WhyMe";
import Animate from "@/lib/Animate";

export default function Home() {
    return (
        <div className="!relative h-auto bg-slate-400 m-0 p-0">
            {/* <TypewriterAnimation /> */}
            <MouseFollow />

            <Navbar />
            <Animate>
                <Banner />
                <InfiniteScroll />
                <WhatWeDo />
                {/* <MyJourney /> */}
                <Projects />
                <OtherTools />
                <WhyMe />
                <InfiniteScroll />
                {/* <AboutMe /> */}
                {/* <Footer /> */}
            </Animate>
        </div>
    );
}
