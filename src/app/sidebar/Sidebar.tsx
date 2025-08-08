import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-[280px] h-screen text-black text-center fixed left-0 top-0">

            <section className="w-full h-full bg-white">
                
                <div className="sidebar-content flex flex-wrap">
                    <div className="sidebar-image w-full  py-[10%] flex justify-center flex-wrap">
                        <div className=" w-full h-[250px] block mx-auto flex justify-center">
                                <Image 
                                    src="/images/me.jpeg"
                                    alt="Eu mesmo"
                                    width={100}
                                    height={100}
                                    className="w-[250px] h-[250px] bg-gray-500 rounded-full"
                                />
                        </div>
                        <div className="flex flex-row items-center h-[50px] w-full justify-center mt-4">
                            <div className="w-[35%] h-[50px] mr-4 bg-gray-500">
                                <Image
                                    src="/images/Flag-United-States-of-America.jpg"
                                    alt="Bandeira dos EUA"
                                    width={100}
                                    height={100}
                                    className="max-h-[50px]"
                                />
                            </div>
                            <div className="w-[35%] h-[50px] max-h-[45px] ml-4 bg-gray-500">
                                <Image 
                                    src="/images/Flag_of_Brazil.svg.png"
                                    alt="Bandeira do Brasil"
                                    width={100}
                                    height={100}
                                    className="max-h-[50px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-links w-full h-screen ">

                        <nav className="flex flex-col">
                            <Link className="border py-6" href="/main/about">
                                About Me
                            </Link>
                            <Link className="border-b py-6" href="/main/certificate">
                                Certificate
                            </Link>
                            <Link className="border-b py-6" href="/main/skills">
                                Skills
                            </Link>
                            <Link className="border-b py-6" href="/main/services">
                                Services
                            </Link>
                            <Link className="border-b py-6" href="/main/contact">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
                
  
            </section>

        </div>
    );
}