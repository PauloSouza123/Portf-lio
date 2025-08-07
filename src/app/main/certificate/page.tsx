"use client";

import Sidebar from "@/app/sidebar/Sidebar";

export default function Certificate() {
   
    const certificates = [
        {
            id: 0,
            title: "Certificado Front-End Completo",
            file: "Certificado_Front_End.pdf",
            date: "22/11/2024",
            hours: "83 horas",
        },
        {
            id: 1,
            title: "Certificado NextJS",
            file: "Certificado_nextjs.pdf",
            date: "18/02/2025",
            hours: "2 horas",
        },
        {
            id: 2,
            title: "Certificado PHP JEDAI",
            file: "Certificado_PHP_JEDAI.pdf",
            date: "07/01/2025",
            hours: "27 horas",
        },
        {
            id: 3,
            title: "certificado React",
            file: "certificado-react.pdf",
            date: "14/02/2025",
            hours: "4 horas",
        },
        {
            id: 4,
            title: "Games JS",
            file: "Games_JS.pdf",
            date: "26/12/2024",
            hours: "6 horas",
        },
        {
            id: 5,
            title: "git github",
            file: "git_github.pdf",
            date: "31/01/2025",
            hours: "2 horas",
        },
    ]

    return (

        
        <div className="relative left-[280px] w-[calc(100%-280px)] p-[30px] bg-gray-100 min-h-[100vh] text-gray-900 h-[100vh] overflow-auto">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <section id="about" className=" py-12 md:px-16 min-h-[100vh] flex flex-wrap w-full">

                    {certificates.map((cert) => (
                        <div className="flex flex-wrap h-full w-[50%] min-w-[100px] h-[240px] mb-[10px]">
                            <div
                                key={cert.id}
                                className="bg-white rounded-2x1 shadow-md hover:shadow-lg transition duration-300 p-6 flex px-10 flex-col w-[80%]"
                            >
                                <h3>{cert.title}</h3>
                                <p>Carga Horária: {cert.hours}</p>
                                <p>Concluído em: {cert.date}</p>
                                <embed src={`/c_certificate/${cert.file}`} type="application/pdf" width="97%" height="240px" className="mt-5"/>   
                            </div>
                        </div>

                    ))}

            

            </section>
    </div>
        </div>
    );
}