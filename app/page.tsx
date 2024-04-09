//  "@ts-nocheck"
"use client";
import React from "react";
import Layout from "@/components/layout";
import Banner from '@/components/sections/Banner';
import About from '@/components/sections/About';

export default function Home() {
    return (
        <div>
            <Banner/>
            <About/>
        </div>
    );
}
