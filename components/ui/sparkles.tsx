"use client";

import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { RecursivePartial, IOptions } from "@tsparticles/engine";

interface SparklesProps {
    className?: string;
    size?: number;
    minSize?: number | null;
    density?: number;
    speed?: number;
    minSpeed?: number | null;
    opacity?: number;
    direction?: "none" | "top" | "bottom" | "left" | "right";
    opacitySpeed?: number;
    minOpacity?: number | null;
    color?: string;
    mousemove?: boolean;
    hover?: boolean;
    background?: string;
    options?: RecursivePartial<IOptions>;
}

export function Sparkles({
    className,
    size = 1.2,
    minSize = null,
    density = 800,
    speed = 1.5,
    minSpeed = null,
    opacity = 1,
    direction = "none",
    opacitySpeed = 3,
    minOpacity = null,
    color = "#ffffff",
    mousemove = false,
    hover = false,
    background = "transparent",
    options = {},
}: SparklesProps) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setIsReady(true);
        });
    }, []);

    const id = useId();
    const defaultOptions: RecursivePartial<IOptions> = {
        background: {
            color: {
                value: background,
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
        fpsLimit: 300,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: hover,
                    mode: "grab",
                    parallax: {
                        enable: mousemove,
                        force: 60,
                        smooth: 10,
                    },
                },
                resize: { enable: true }, // Corrected the resize property
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: color,
            },
            move: {
                enable: true,
                direction: direction !== "none" ? direction : undefined,
                speed: {
                    min: minSpeed || speed / 130,
                    max: speed,
                },
                straight: true,
            },
            collisions: {
                enable: false,
                mode: "bounce", // Corrected type
            },
            number: {
                value: density,
            },
            opacity: {
                value: {
                    min: minOpacity || opacity / 10,
                    max: opacity,
                },
                animation: {
                    enable: true,
                    speed: opacitySpeed,
                },
            },
            size: {
                value: {
                    min: minSize || size / 1.5,
                    max: size,
                },
            },
        },
        detectRetina: true,
    };

    return (
        isReady && (
            <Particles
                id={id}
                options={{ ...(defaultOptions as RecursivePartial<IOptions>), ...(options as RecursivePartial<IOptions>) }}
                className={className}
            />
        )
    );
}
