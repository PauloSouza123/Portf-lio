import Sidebar from "@/app/sidebar/Sidebar";
import Image from "next/image";

export default function Contact() {
  return (

    <div className="relative left-[280px] w-[calc(100%-280px)] p-[30px] bg-[#f5f5f7] min-h-[100vh] text-gray-900 h-[100vh] overflow-auto">
      <Sidebar/>
      <div className="flex flex-col w-full justify-center items-center">

        <div className="w-full bg-[#f5f5f7] max-h-[90vh] relative">

          <div className="bg-[url('/images/newyork.jpg')] bg-cover bg-center w-full h-[80vh]">

            <div className="relative text-center text-white">
              <h1 className="absolute top-[200px] left-[43%] text-[40px]">Contact</h1>
            </div>
          
          </div>

          <div className="absolute flex flex-around w-[800px] h-[400px] bg-gray-500/85 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="f1-section w-[33.3%] h-[100%] relative">
              <div className="w-[130px] h-[130px] bg-white rounded-full absolute top-[70px] left-[25%]  ">
                <Image 
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                />
              </div>
                <div className="text-white text-center mt-[210px] ">
                  <h2>LinkedIn</h2>
                <a href="https://www.linkedin.com/in/paulo-souza-896242328/" target="_black" >linkedin.com</a>
              </div>
            </div>
            <div className="f2-section w-[33.3%] h-[100%] relative">
              <div className="w-[130px] bg-white h-[130px] rounded-full absolute top-[30px] left-[25%] ">
                <Image 
                  src="/images/contact.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                />
              </div>
                <div className="text-white mt-[180px]">
                  <h2 className="text-center mb-3">Contact</h2>
                  <p className="mb-2 ml-4">Name: Paulo Andre de Souza</p>
                  <p className="mb-2 ml-4">Email: hobtcraft@gmail.com</p>
                  <p className="mb-2 ml-4">Phone: 45 99851-8156</p>
                  <p className="mb-2 ml-4">Location: Cacavel-PR</p>
              </div>
            </div>

            <div className="f3-section w-[33.3%] h-[100%] relative">
              <div className="w-[130px] h-[130px] bg-white rounded-full absolute top-[70px] left-[25%] ">
                <Image 
                  src="/images/github.jpeg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-white text-center mt-[210px]">
                <h2>GitHub</h2>
                <a href="https://github.com/PauloSouza123" target="_blank" >github.com</a>
              </div>
            </div>
          </div>

          <div className="w-full h-[40vh]">
          
          </div>

        </div>

      </div>
    </div>

  );
}
