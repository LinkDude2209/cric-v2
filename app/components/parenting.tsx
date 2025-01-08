import React from 'react';

const SportsParentingSection: React.FC = () => {
    return (
        <section className="bg-transparent px-6 md:px-12 lg:px-20 py-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-7xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Sports Parenting</h2>
                <h2 className="text-2xl md:text-2xl font-bold text-green-500 mb-6 tracking-tighter">Nurturing Tomorrow&apos;s Champions Through Empowered Parenting</h2>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    At <span className="text-purple-400 font-semibold">Crickzy</span>, we understand the
                    <span className="text-yellow-400 font-semibold"> vital role</span> parents play in shaping the
                    <span className="text-purple-400 font-semibold"> future</span> of young athletes in any sport.
                    Our journey began with a <span className="text-yellow-400 font-semibold"> heartfelt realization</span>:
                    traditional sports training often overlooks the <span className="text-purple-400 font-semibold">unique challenges</span>
                    that parents face in supporting their children&apos;s athletic ambitions.
                    We recognize dedicated parents like you, passionate about fostering your child&apos;s
                    <span className="text-yellow-400 font-semibold"> potential</span>, yet navigating the
                    <span className="text-purple-400 font-semibold"> complexities</span> of schedules, commitments,
                    and the ever-changing landscape of youth sports.
                </p>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    To address these challenges, we offer
                    <span className="text-purple-400 font-semibold"> specialized consultations</span>,
                    <span className="text-yellow-400 font-semibold"> content</span>, and
                    <span className="text-purple-400 font-semibold"> coaching services</span> designed to empower parents on their sports parenting journey.
                    Our expert <span className="text-yellow-400 font-semibold">guidance</span>,
                    <span className="text-purple-400 font-semibold">resources</span>, and
                    <span className="text-yellow-400 font-semibold">community support</span> provide the tools necessary to navigate the
                    <span className="text-purple-400 font-semibold"> youth sports world</span> effectively. Together, we aim to redefine
                    <span className="text-yellow-400 font-semibold"> sports parenting</span>, ensuring that every young athlete has the opportunity to thrive
                    <span className="text-purple-400 font-semibold">both on and off the field</span>.
                </p>
                <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                    Coming Soon
                </button>
            </div>
        </section>
    );
};

export default SportsParentingSection;
