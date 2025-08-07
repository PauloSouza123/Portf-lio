"use client";

import Sidebar from "@/app/sidebar/Sidebar";
import { useState } from "react";
import Image from "next/image";

export default function About() {

    const [language, setLanguage] = useState("pt");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
    }

    const text = {
    pt: {
      title: "Sobre Mim",
      content: `Olá! Meu nome é Paulo Andre de Souza, sou desenvolvedor Full Stack especializado em backend com Java e Spring Boot. Tenho experiência com bancos de dados PostgreSQL, Docker, cron no Linux, AWS e cibersegurança — áreas que estudo e aplico constantemente para criar soluções escaláveis, seguras e eficientes.

Atuo também com otimização de plataformas como iFood e desenvolvimento de automações para conversão e fidelização de clientes. No frontend, utilizo tecnologias como React, Next.js e TypeScript, sempre prezando pela performance e experiência do usuário.

Sou movido por desafios e apaixonado por aprender. Trabalho com foco, responsabilidade e dedicação — inclusive fora do expediente — buscando sempre entregar o melhor resultado possível. Meu objetivo é crescer como especialista em backend e segurança, contribuindo com soluções que realmente geram impacto.`
    },
    en: {
      title: "About Me",
      content: `Hi! I'm Paulo Andre de Souza, a Full Stack Developer specialized in backend development with Java and Spring Boot. I work with PostgreSQL, Docker, Linux cron jobs, AWS, and cybersecurity — fields I study and apply regularly to create scalable, secure, and efficient solutions.

I also optimize platforms like iFood and develop automation tools focused on customer acquisition and retention. On the frontend side, I use technologies like React, Next.js, and TypeScript, always prioritizing performance and user experience.

I'm driven by challenges and passionate about learning. I work with focus, commitment, and dedication — even beyond regular hours — always aiming to deliver the best results. My goal is to grow as a backend and security specialist, contributing to impactful solutions.`
    },
    }
    return (
        <div className="relative left-[280px] w-[calc(100%-280px)] p-[30px] bg-gray-100 min-h-[110vh] text-gray-900 h-[100vh]">
            <Sidebar/>
    <div className="flex flex-col ">
                <section id="about" className="bg-white py-12 px-4 sm:px-8 md:px-16 min-h-[100vh]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleLanguage}
            className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
          >
            {language === "pt" ? "Switch to English 🇺🇸" : "Trocar para Português 🇧🇷"}
          </button>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          {text[language].title}
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify whitespace-pre-line">
          {text[language].content}
        </p>
      </div>
        <div className="flex justify-center items-center w-full h-[300px] min-w-[400px] mt-[30px]">
      <Image
            src="/images/tecnologia.jpg"
            alt="image"
            width={100}
            height={100}
            className="min-w-[400px] w-[600px] mx-4 my-4"
        />
        </div>


    </section>
    </div>
        </div>
    );
}