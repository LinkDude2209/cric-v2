import React from 'react';
import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';

function Coaches() {
    return (
        <section className='w-full px-4 py-8'>
            <h2 className='text-center text-7xl tracking-tighter font-bold'>Expert Coaches</h2>
            <p className='text-center sm:text-lg lg:text-2xl text-green-500 dark:text-gray-300 mb-8'>Meet our expert team dedicated to guiding you to success.</p>
            <div className='flex flex-wrap justify-center gap-8'>
                {/* Card 1 */}
                <div className='w-[400px] relative mt-4 h-[450px] overflow-hidden group dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col'>
                    <div className='w-full h-full'>
                        <Image
                            src={'/coach1karthik.webp'}
                            alt='Coach'
                            width={600}
                            height={600}
                            className='h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md'
                        />
                    </div>
                    <article className='p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#c34c32] opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2'>
                            <h1 className='md:text-2xl font-semibold'>Kartik Jeshwant</h1>
                            <p className='sm:text-base text-sm'>
                                former Karnataka cricket team Captain, Ranji Trophy coach
                            </p>
                            <button className='p-2 bg-black flex rounded-md text-white'>
                                Learn More <ChevronsRight />
                            </button>
                        </div>
                    </article>
                    <article className='p-2 w-full h-[20%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#c34c32] opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300'>
                        <h1 className='md:text-2xl font-semibold'>Kartik Jeshwant</h1>
                        <p className='sm:text-base text-sm'>Ranji Trophy coach</p>
                    </article>
                </div>

                {/* Card 2 */}
                <div className='w-[400px] relative mt-4 h-[450px] overflow-hidden group dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col'>
                    <div className='w-full h-full'>
                        <Image
                            src={'/coach2-phill.jpeg'}
                            alt='Coach'
                            width={600}
                            height={600}
                            className='h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md'
                        />
                    </div>
                    <article className='p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#c34c32] opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <div className='translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2'>
                            <h1 className='md:text-2xl font-semibold'>Phill O&apos;Brien</h1>
                            <p className='sm:text-base text-sm'>
                                Former ECB coach of the year for Lancashire. Coaching for 30 years. Qualified ECB advanced (Level 3) and Club Coach Award certificate holder. Founder of the largest cricket academy in the North West of England and chairman at a community club.
                            </p>
                            <button className='p-2 bg-black flex rounded-md text-white'>
                                Learn More <ChevronsRight />
                            </button>
                        </div>
                    </article>
                    <article className='p-2 w-full h-[20%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#c34c32] opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300'>
                        <h1 className='md:text-2xl font-semibold'>Phill O&apos;Brien</h1>
                        <p className='sm:text-base text-sm'>Former ECB coach of the year</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Coaches;
