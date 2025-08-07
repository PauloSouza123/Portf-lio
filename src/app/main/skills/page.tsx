import Sidebar from "@/app/sidebar/Sidebar";

export default function Skills() {
    return (
        <div className="relative left-[280px] w-[calc(100%-280px)] p-[30px] bg-gray-100 min-h-[100vh] text-gray-900 h-[100vh] bg-gray-100 min-h-[125vh]">
            <Sidebar/>
            <div className="flex flex-col">
                <section id="about" className="py-12 px-4 sm:px-8 md:px-16 min-h-[100vh] bg-gray-100">
                    Minhas Skills

                    <div className="w-full min-h-[100vh] h-[100%] flex flex-wrap">
                        
                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🧠 Linguagens de Programação</h2>
                            <ul>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>PHP</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>Shell Script</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🛠️ Frameworks e Bibliotecas</h2>
                            <ul>
                                <li>Spring Boot</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Vue.js</li>
                                <li>Angular</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>Materialize</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🗄️ Banco de Dados</h2>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>SQLite</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>💻 Ferramentas, DevOps e Infraestrutura</h2>
                            <ul>
                                <li>Docker</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>GitLab</li>
                                <li>CI/CD</li>
                                <li>AWS</li>
                                <li>Cron (Linux)</li>
                                <li>Nginx</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🔐 Cibersegurança</h2>
                            <ul>
                                <li>Kali Linux</li>
                                <li>Metasploit</li>
                                <li>Nmap</li>
                                <li>Burp Suite</li>
                                <li>Wireshark</li>
                                <li>Curso avançado de Linux (em andamento)</li>
                                <li>Pentest (em prática e estudo contínuo)</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🧰 Sistemas Operacionais</h2>
                            <ul>
                                <li>Linux (Ubuntu, Kali, CentOS)</li>
                                <li>Windows (avançado, manutenção e suporte)</li>
                                <li>macOS</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🛠️ Outras Ferramentas e Tecnologias</h2>
                            <ul>
                                <li>UTM (virtualização no macOS)</li>
                                <li>iTerm (terminal avançado no Mac)</li>
                                <li>VS Code</li>
                                <li>IntelliJ IDEA</li>
                                <li>Postman</li>
                                <li>Figma (básico)</li>
                                <li>Redes (curso de Arquitetura de Redes)</li>
                                <li>Hardware (Manutenção de PCs e notebooks, montagem e diagnóstico)</li>
                            </ul>
                        </div>

                        <div className="w-[31%] bg-white p-[30px] m-[10px] shadow-md hover:shadow-lg transition duration-300">
                            <h2>🏗️ Conhecimentos Técnicos e Cursos</h2>
                            <ul>
                                <li>Arquitetura de Computadores</li>
                                <li>Arquitetura de Redes</li>
                                <li>Sistemas Operacionais</li>
                                <li>Segurança da Informação</li>
                                <li>Desenvolvimento Full Stack</li>
                                <li>Suporte técnico e manutenção de sistemas</li>
                                <li>Instalação e manutenção de servidores, câmeras, alarmes e infraestrutura de rede</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}