"use client"

import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { SparklesCore } from "@/components/ui/sparkles";
import NavBar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HireBtn } from "../buttons/hirebtn";

export default function Banner() {
    const { theme } = useTheme();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setInitialized(true);
        }
    }, []);

    if (!initialized) {
        return null;
    }

    return (
        <div className="w-full h-screen relative model no-scrollbar">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={1.6}
                maxSize={2.4}
                particleDensity={20}
                className="w-full h-full absolute -z-10"
                particleColor={theme === "light" ? "#000000" : "#FFFFFF"}
            />
            {/* <NavBar /> */}
            <div className="">
                <ModeToggle />
            </div>
            <div className="w-full h-full relative flex items-center justify-center">
                <div className="splashLogo flex flex-col items-center relative" style={{ zIndex: 10 }}>
                    <div className="glitch-wrapper text-center">
                        <span className="glitch" data-glitch="Hi, I'm John Mamanao" style={{ color: theme === "light" ? "#000" : "#fff" }}>
                            Hi, I&apos;m John Mamanao
                        </span>
                    </div>
                    <div className="text-center">
                        <HireBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
}
