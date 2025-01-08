"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-6xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tighter">
                            Achieve Your <br />
                            <span className="text-6xl sm:text-5xl md:text-9xl font-bold mt-1 leading-none tracking-tighter bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-md">
                                Peak Performance
                            </span>

                        </h1>

                    </>
                }
            >
                <video
                    src={`/video-main.mp4`}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                    autoPlay
                    muted
                    loop
                />
            </ContainerScroll>
        </div>
    );
}
