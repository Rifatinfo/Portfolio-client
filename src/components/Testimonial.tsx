"use client";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="ezy__testimonial23 dark py-14 md:py-24 text-zinc-900 dark:text-white relative z-[1] overflow-hidden">
      
      {/* Background SVGs (unchanged) */}
      <svg
        className="absolute bottom-0 left-0 -z-[1]"
        width="404"
        height="572"
        viewBox="0 0 404 572"
        fill="none"
      >
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
      >
        <circle
          cx="239.5"
          cy="239.5"
          r="239.5"
          className="text-primary dark:text-[#f7cac3]"
        />
      </svg>

      <div className="container px-4 mx-auto">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 items-center mb-6 md:mb-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 animate-fade-up">
            <h2 className="text-[32px] font-bold leading-normal">
              Everyone should believe in What Our Client Say.
            </h2>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <div className="grid grid-cols-3 gap-6">
            
            {[ 
              {
                img: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759755214/IMG_3879_1_n8jpjk.jpg",
                text: "The interface feels clean and intuitive. The content is well-structured, making it easy for users to understand the purpose at a glance",
              },
              {
                img: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759755231/pp_s2geg1.jpg",
                text: "Great use of spacing and typography. The design maintains a good balance between readability and visual appeal.",
              },
              {
                img: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759755251/IMG_1038_jd0wjj.jpg",
                text: "The project demonstrates solid frontend development skills with a smooth user experience and responsive layout.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-span-3 lg:col-span-1 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white dark:text-black shadow-2xl h-full p-6 xl:p-10
                                transition-transform duration-500 hover:-translate-y-2">
                  
                  {/* Avatar */}
                  <div className="flex items-center mb-6">
                    <div className="mr-3 w-[65px] h-[65px] rounded-full overflow-hidden border
                                    transition-transform duration-500 hover:scale-105">
                      <Image
                        src={item.img}
                        alt="Client"
                        width={65}
                        height={65}
                        className="object-cover"
                        sizes="65px"
                      />
                    </div>

                    <div>
                      <h4 className="text-xl font-medium">Akshay Kumar</h4>
                      <p className="text-sm mb-2">Founder / CEO</p>
                    </div>
                  </div>

                  <p className="opacity-75 mb-2">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-2.5 h-2.5 scale-125 bg-primary rounded-full"></button>
            <button className="w-2 h-2 bg-primary rounded-full"></button>
            <button className="w-2 h-2 bg-primary rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
