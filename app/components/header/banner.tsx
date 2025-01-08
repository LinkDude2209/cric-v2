const SimpleBanner = () => {
    return (
        <>
            <div
                className="absolute left-0 right-0 transition-all duration-300 ease-in-out"
            >
                <div className="flex w-full items-center justify-center gap-x-6 bg-red-500 px-6 py-3 sm:px-3.5">
                    <div className="flex items-center text-sm font-medium leading-6 text-white">
                        <p>Pearsonalized Coaching at your fingertips-crickzy</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimpleBanner;
