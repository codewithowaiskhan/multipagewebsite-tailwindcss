// src/app/about/page.tsx

"use client"; // Client Component directive agar React hooks use kar rahe hain

import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-yellow-300 p-8 max-w-[800px] m-auto mt-10 mb-10">
        <section className="intro-section">
          <h1 className="text-gray-800 mb-4 font-bold text-3xl ml-72">
            About Me
          </h1>
          <Image
            src={"/images/Portfolio-image-.png"} // Replace with your profile picture path
            alt="Front-End Developer"
            width={150}
            height={150}
            className="rounded-full mb-4"
          />
          <p className="text-[1.1rem] text-[#555]">
            Hello! I am a passionate Front-End Developer with a knack for
            creating interactive and user-friendly interfaces. I specialize in
            JavaScript, React, and Next.js, and I have a deep understanding of
            responsive design and web accessibility.
          </p>
        </section>

        <section className="skills-section">
          <h2 className="text-[#333] mt-5 mb-5 font-bold">Skills</h2>

          <ul className="list-[disc] ml-6 text-[#555]">
            <li>HTML5, CSS3, and JavaScript (ES6+)</li>
            <li>React, Next.js, and TypeScript</li>
            <li>Responsive Design & Mobile First Approach</li>
            <li>CSS Frameworks: Tailwind CSS, Bootstrap</li>
            <li>Version Control: Git & GitHub</li>
            <li>Web Accessibility & SEO Best Practices</li>
          </ul>
        </section>

        <section className="experience-section">
          <h2 className="text-[#333] mt-5 mb-5 font-bold">Experience</h2>
          <p>
            I have worked on various projects ranging from simple landing pages
            to complex web applications. With a keen eye for design and detail,
            I ensure my work is not only functional but also visually appealing.
            My experience in collaborating with designers and back-end
            developers has helped me deliver seamless products.
          </p>
        </section>

        <section className="contact-section">
          <h2 className="text-[#333] mt-5 font-bold">Contact</h2>
          <p>
            If you'd like to work together or have any questions, feel free to
            reach out!
          </p>
          <a
            href="mailto:your-imowaiskhanofficial@gmail.com"
            className="inline-block p-2 px-4 bg-sky-600 text-white rounded-lg no-underline mt-4 "
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}
