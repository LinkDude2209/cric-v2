import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="bg-transparent px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-7xl md:text-7xl font-bold text-white mb-6 tracking-tighter">About Us</h2>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    At <span className="text-blue-400 font-semibold">Crickzy</span>, we believe in the power of sports to transform lives.
                    Our journey began with a simple yet profound realization: traditional coaching models
                    <span className="text-green-400 font-semibold"> don’t always fit</span> into the busy, dynamic lives of modern athletes
                    and sports enthusiasts. We saw talented individuals like you, eager to improve and achieve their goals,
                    but struggling to find the time, flexibility, and financial resources to commit to regular coaching.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-full sm:w-1/3 p-6 bg-white/10 border border-white/20 shadow-lg rounded-lg backdrop-blur">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-3">Our Vision</h3>
                        <p className="text-white text-lg leading-relaxed">
                            Democratize access to <span className="text-green-400 font-semibold">high-quality sports coaching</span> and empower athletes to access top-notch coaching without the constraints of location, rigid schedules, and hefty fees.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 p-6 bg-white/10 border border-white/20 shadow-lg rounded-lg backdrop-blur">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-3">Our Mission</h3>
                        <p className="text-white text-lg leading-relaxed">
                            Empowering athletes everywhere with <span className="text-green-400 font-semibold">world-class coaching</span>, making it flexible and convenient for everyone.
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 p-6 bg-white/10 border border-white/20 shadow-lg rounded-lg backdrop-blur">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-3">Our Story</h3>
                        <p className="text-white text-lg leading-relaxed">
                            From <span className="text-green-400 font-semibold">Passion to Empowerment</span>: The Birth of <span className="text-blue-400 font-semibold">Crickzy</span>. We saw the need for a solution tailored to modern athletes and created a platform to bridge the gap between <span className="text-green-400 font-semibold">passion</span> and accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
