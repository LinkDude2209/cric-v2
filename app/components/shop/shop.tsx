'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

interface ProjectsTypes {
    id: string;
    img: string;
    title: string;
    des: string;
}

const projects: ProjectsTypes[] = [
    {
        id: '01',
        img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
        title: 'Distrokings',
        des: 'We make your logo communicate with your customers more than words ever could',
    },
    {
        id: '02',
        img: 'https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=1200&auto=format&fit=crop',
        title: 'Profitables',
        des: 'We are dedicated to unlocking your business potential through precision development',
    },
    {
        id: '03',
        img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=800&auto=format&fit=crop',
        title: 'Topserve-copiers',
        des: 'We are dedicated to unlocking your business potential through precision development',
    },
    {
        id: '04',
        img: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=800&auto=format&fit=crop',
        title: 'Labramart.',
        des: 'We specialize in crafting marketing solutions that propel your brand to new heights',
    },
];

export default function Shop() {
    return (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4">
                {projects.map((project, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        viewport={{ once: false }}
                        className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg"
                    >
                        <Image
                            src={project.img}
                            alt={project.title}
                            height={600}
                            width={1200}
                            className="absolute inset-0 h-full w-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        <div className="relative z-10 text-white text-center p-4">
                            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                            <p className="text-sm">{project.des}</p>
                        </div>
                        <div className="absolute bottom-4 right-4 lg:w-12 w-10 lg:h-12 h-10 bg-black text-white grid place-content-center rounded-full">
                            <MoveUpRight />
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
