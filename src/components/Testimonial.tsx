import Image from "next/image";

const Testimonial = () => {
    return (
        <div>
            <section
                className="ezy__testimonial23 dark py-14 md:py-24  text-zinc-900 dark:text-white relative z-[1]"
            >

                <svg
                    className="absolute bottom-0 left-0 -z-[1]"
                    width="404"
                    height="572"
                    viewBox="0 0 404 572"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ✅ Use camelCase for SVG attributes */}
                    <circle
                        cx="118"
                        cy="286"
                        r="265.5"
                        stroke="currentColor"
                        strokeWidth="41"
                        className="text-primary dark:text-[#f7cac3]"
                    />
                </svg>

                <svg
                    className="absolute top-0 right-0 -z-[1]"
                    width="269"
                    height="479"
                    viewBox="0 0 269 479"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="239.5"
                        cy="239.5"
                        r="239.5"
                        fill="currentColor"
                        // fillOpacity="0.25"
                        className="text-primary dark:text-[#f7cac3]"
                    />
                </svg>


                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-12 gap-6 items-center justify-between mb-6 md:mb-12">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <h2 className="text-[32px] font-bold leading-normal">Everyone should believe in What Our Client Say .</h2>
                        </div>
                    
                    </div>

                    <div className="mt-12">
                        <div className="grid grid-cols-3 gap-6">
                            {/* <!-- item --> */}
                            <div className="col-span-3 lg:col-span-1">
                                <div className="bg-white dark:text-black shadow-2xl h-full p-6 xl:p-10">
                                    <div className="flex items-center mb-6">
                                        <div className="mr-3">
                                            <Image
                                                src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759755214/IMG_3879_1_n8jpjk.jpg"
                                                alt=""
                                                className="max-w-full h-auto rounded-full border"
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium">Akshay Kumar</h4>
                                            <p className="text-sm mb-2">Founder / CEO</p>
                                        </div>
                                    </div>
                                    <p className="opacity-75 mb-2">
                                        An activity that requires a person mental or physical effort is work.If a person is trained for a
                                        certain type of job, they may have a job.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- item --> */}
                            <div className="col-span-3 lg:col-span-1">
                                <div className="bg-white dark:text-black  shadow-2xl h-full p-6 xl:p-10">
                                    <div className="flex items-center mb-6">
                                        <div className="mr-3">
                                            <Image
                                                src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759755231/pp_s2geg1.jpg"
                                                alt=""
                                                className="max-w-full h-auto rounded-full border"
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium">Akshay Kumar</h4>
                                            <p className="text-sm mb-2">Founder / CEO</p>
                                        </div>
                                    </div>
                                    <p className="opacity-75 mb-2">
                                        An activity that requires a persons mental or physical effort is work.If a person is trained for a
                                        certain type of job, they may have a job.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- item --> */}
                            <div className="col-span-3 lg:col-span-1">
                                <div className="bg-white dark:text-black  shadow-2xl h-full p-6 xl:p-10">
                                    <div className="flex items-center mb-6">
                                        <div className="mr-3">
                                            <Image
                                                src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759755251/IMG_1038_jd0wjj.jpg"
                                                alt=""
                                                className="max-w-full h-auto rounded-full border"
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-medium">Akshay Kumar</h4>
                                            <p className="text-sm mb-2">Founder / CEO</p>
                                        </div>
                                    </div>
                                    <p className="opacity-75 mb-2">
                                        An activity that requires a person mental or physical effort is work.If a person is trained for a
                                        certain type of job, they may have a job.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 m-0 mt-12">
                            <button className="w-2.5 h-2.5 scale-125 bg-primary rounded-full"></button>
                            <button className="w-2 h-2 bg-primary rounded-full Dark:bg-primary"></button>
                            <button className="w-2 h-2 bg-primary rounded-full Dark:bg-primary"></button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonial;