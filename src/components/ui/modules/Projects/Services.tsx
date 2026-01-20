"use client";
import { Code2, Server, Layers } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, fast, and modern UI using React, Next.js, Tailwind CSS, and animations.",
    icon: <Code2 size={32} />,
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend APIs using Node.js, Express, MongoDB, Prisma, and MySQL.",
    icon: <Server size={32} />,
  },
  {
    title: "Full Stack Solutions",
    desc: "Complete web solutions from UI to database with authentication, payments, and deployment.",
    icon: <Layers size={32} />,
  },
];

export default function Services() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-[#fff6f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Do</p>
          <h2 className="text-4xl font-bold text-gray-900">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            I help businesses and individuals build high-quality web applications
            with modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-sm
                         transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary
                              mb-6 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                              bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
