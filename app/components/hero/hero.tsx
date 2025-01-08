import React from 'react';
import { Sparkles } from '@/components/ui/sparkles';

function Hero() {
    return (
        <>
            <main className="h-screen w-full text-white">
                <section className="container mx-auto relative h-full w-full rounded-2xl flex flex-col justify-center items-center">
                    <article className="grid gap-4 text-center relative z-10 px-6 sm:px-12">
                        <span className="inline-block xl:text-lg text-sm sm:text-base border p-1 px-3 sm:px-4 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
                            Early Access
                        </span>
                        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-tight sm:leading-[1.4] tracking-tighter">
                            Personalized Coaching at <br className="hidden sm:block" /> Your Fingertips
                        </h1>
                        <span className="text-sm sm:text-lg leading-relaxed">
                            Our expert-led courses are perfect for all skill levels. Gain{' '}
                            <br className="hidden sm:block" />
                            hands-on experience and create stunning animations <br className="hidden sm:block" />{' '}
                            effortlessly. Join us today!
                        </span>
                        <button className="border border-blue-400 w-fit p-2 sm:p-3 px-4 sm:px-6 rounded-md bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-2xl mx-auto text-white">
                            Get Started
                        </button>
                    </article>

                    <div className="absolute bottom-0 z-[2] h-[350px] w-full overflow-hidden [mask-image:radial-gradient(100%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute">
                        <Sparkles
                            density={1800}
                            speed={1.2}
                            color="#48b6ff"
                            direction="top"
                            className="absolute inset-x-0 bottom-0 h-full w-full"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Hero;
