import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee-duo";
import Image from "next/image";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "Crickzy has made it so easy to track my players performance. The analytics and tools are invaluable for improving game strategies.A must-have for coaches!",
        img: "/comp.jpg",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I love using Crickzy to improve my batting and bowling skills.The detailed stats help me understand my strengths and weaknesses.Highly recommended!",
        img: "/comp.jpg",
    },
    {
        name: "John",
        username: "@john",
        body: "Crickzy is super helpful for my practice sessions.I can see my progress and improve my techniques with every session.",
        img: "/comp.jpg",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "Really helped me a lot in my keeping. The coaches are very helpful!",
        img: "/comp.jpg",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "Crickzys tools are perfect for part-time players like me.It’s helped me stay consistent with my game and enjoy cricket more.",
        img: "/comp.jpg",
    },
    {
        name: "James",
        username: "@james",
        body: "My son uses Crickzy to improve his bowling, and the results have been amazing! It’s a great platform for aspiring young cricketers.",
        img: "/comp.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 shadow-lg", // Increased width to w-80 and added padding
                // light styles
                "border-gray-200 bg-gray-900 hover:bg-gray-900",
                // dark styles
                "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <Image
                    className="rounded-full"
                    width="48"
                    height="48"
                    alt={`${name}'s profile`}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-green-500 dark:text-gray-400">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-4 text-base text-white dark:text-gray-300">
                {body}
            </blockquote>
        </figure>
    );
};


export function MarqueeDemo() {
    return (
        <section className="w-full dark:bg-gray-900 mt-36 mb-40">
            <h2 className="text-center text-7xl font-bold text-white dark:text-white mb-8 tracking-tighter">
                What Our Users <br />Are Saying
            </h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s] space-x-6">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s] space-x-6">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
