
import Sidebar from "@/app/sidebar/Sidebar";
export default function Projects() {
    return (
        <div className="relative left-[280px] w-[calc(100%-280px)] p-[30px] bg-gray-100 min-h-[100vh] text-gray-900 h-[100vh]">
            <Sidebar/>
    <div className="flex flex-col ">
        <section id="about" className="bg-white py-12 px-4 sm:px-8 md:px-16 min-h-[100vh]">
            Meus Projetos
        </section>

    </div>
        </div>
    );
}   