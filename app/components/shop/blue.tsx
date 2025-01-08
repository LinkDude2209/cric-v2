

export default function Blue() {
    return (
        <section className="relative bg-blue-500 text-white overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 relative z-10">
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                        Crafted for the Kickflip
                    </h1>
                    <p className="mt-6 text-lg md:text-xl">
                        Get the exclusive crickzy merch today!
                    </p>
                    <div className="mt-8">
                        <button className="bg-lime-300 text-black px-6 py-3 font-bold rounded-md shadow-md hover:shadow-lg transform hover:scale-105">
                            Shop Boards
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mt-12 lg:mt-0 lg:w-1/2 relative">

                    {/* Background Effect */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-xl opacity-70 z-10" />
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" />
        </section>
    );
}
