"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "./marquee";

export function Highlight({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                "bg-[#f0abfc] p-1 py-0.5 font-bold text-[#d946ef] dark:bg-[#f0abfc] dark:text-[#d946ef]",
                className,
            )}
        >
            {children}
        </span>
    );
}

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    role: string;
    img?: string;
    description: React.ReactNode;
    className?: string;
}

export function TestimonialCard({
    description,
    name,
    img,
    role,
    className,
    ...props // Spread remaining props
}: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
                "border border-neutral-200",
                "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                className,
            )}
            {...props} // Spread props here
        >
            <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
                {description}
                <div className="flex flex-row py-1">
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                </div>
            </div>
            <div className="flex w-full select-none items-center justify-start gap-5">
                <Image
                    width={40}
                    height={40}
                    src={img || ""}
                    alt={name}
                    className="size-10 rounded-full ring-1 ring-border ring-offset-4"
                />
                <div>
                    <p className="font-medium text-neutral-500">{name}</p>
                    <p className="text-xs font-normal text-neutral-400">{role}</p>
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Cricket Coach, Mumbai",
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        description: (
            <p>
                Crickzy has made it so easy to track my players performance.
                <Highlight>
                    The analytics and tools are invaluable for improving game strategies.
                </Highlight>{" "}
                A must-have for coaches!
            </p>
        ),
    },
    {
        name: "Priya Patel",
        role: "Amateur Player, Delhi",
        img: "https://randomuser.me/api/portraits/women/32.jpg",
        description: (
            <p>
                I love using Crickzy to improve my batting and bowling skills.{" "}
                <Highlight>
                    The detailed stats help me understand my strengths and weaknesses.
                </Highlight>{" "}
                Highly recommended!
            </p>
        ),
    },
    {
        name: "John Smith",
        role: "Cricket Enthusiast, Sydney",
        img: "https://randomuser.me/api/portraits/men/52.jpg",
        description: (
            <p>
                Watching cricket is even more fun with Crickzy.{" "}
                <Highlight>
                    It provides in-depth insights about matches and players.
                </Highlight>{" "}
                I use it every day!
            </p>
        ),
    },
    {
        name: "Aisha Khan",
        role: "University Team Captain, Lahore",
        img: "https://randomuser.me/api/portraits/women/42.jpg",
        description: (
            <p>
                Crickzy has completely changed how my team prepares for matches.{" "}
                <Highlight>
                    The drills and practice sessions are so much more efficient now.
                </Highlight>{" "}
            </p>
        ),
    },
    {
        name: "Chris Wilson",
        role: "Weekend League Player, London",
        img: "https://randomuser.me/api/portraits/men/67.jpg",
        description: (
            <p>
                Crickzys tools are perfect for part-time players like me.{" "}
                <Highlight>
                    It’s helped me stay consistent with my game and enjoy cricket more.
                </Highlight>{" "}
            </p>
        ),
    },
    {
        name: "Meera Sharma",
        role: "Parent of a Young Cricketer, Bangalore",
        img: "https://randomuser.me/api/portraits/women/64.jpg",
        description: (
            <p>
                My son uses Crickzy to improve his bowling, and the results have been
                amazing!{" "}
                <Highlight>
                    It’s a great platform for aspiring young cricketers.
                </Highlight>{" "}
            </p>
        ),
    },
    {
        name: "Ahmed Ali",
        role: "Cricket Academy Owner, Karachi",
        img: "https://randomuser.me/api/portraits/men/24.jpg",
        description: (
            <p>
                Crickzys features make it easier for me to manage my academy and train
                players.{" "}
                <Highlight>
                    The performance tracking tools are just incredible.
                </Highlight>{" "}
            </p>
        ),
    },
    {
        name: "Sophia Taylor",
        role: "Cricket Blogger, Melbourne",
        img: "https://randomuser.me/api/portraits/women/15.jpg",
        description: (
            <p>
                I use Crickzy for all my cricket blogs and articles.{" "}
                <Highlight>
                    The match data and analysis are always up-to-date and reliable.
                </Highlight>{" "}
            </p>
        ),
    },
    {
        name: "Tom Green",
        role: "High School Player, Auckland",
        img: "https://randomuser.me/api/portraits/men/74.jpg",
        description: (
            <p>
                Crickzy is super helpful for my practice sessions.{" "}
                <Highlight>
                    I can see my progress and improve my techniques with every session.
                </Highlight>{" "}
            </p>
        ),
    },
    {
        name: "Ananya Das",
        role: "Cricket Fan, Kolkata",
        img: "https://randomuser.me/api/portraits/women/27.jpg",
        description: (
            <p>
                As a fan, Crickzy keeps me updated with all the latest cricket stats and
                news.{" "}
                <Highlight>
                    I feel more connected to the game than ever before!
                </Highlight>{" "}
            </p>
        ),
    },
];

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="container py-10 text-center flex flex-col items-center"
        >
            <h2 className="mb-4 text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
                What People Are Saying
            </h2>
            <h3 className="mb-8 max-w-lg text-lg font-medium tracking-tight text-foreground/80">
                Don&apos;t just take our word for it. Here&apos;s what{" "}
                <span className="bg-gradient bg-clip-text text-green-500">
                    real people
                </span>{" "}
                are saying about{" "}
                <span className="from-fg-onAccent text-purple-600">Crickzy</span>.
            </h3>
            <div className="relative mt-6 max-h-screen overflow-hidden w-full">
                <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
                    {Array(Math.ceil(testimonials.length / 3))
                        .fill(0)
                        .map((_, i) => (
                            <Marquee
                                vertical
                                key={i}
                                className={cn({
                                    "[--duration:60s]": i === 1,
                                    "[--duration:30s]": i === 2,
                                    "[--duration:70s]": i === 3,
                                })}
                            >
                                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: Math.random() * 0.8,
                                            duration: 1.2,
                                        }}
                                    >
                                        <TestimonialCard {...card} />
                                    </motion.div>
                                ))}
                            </Marquee>
                        ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
            </div>
        </section>
    );
}
