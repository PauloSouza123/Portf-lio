import Sidebar from "./sidebar/Sidebar";
import About from "./main/about/page";

export default function Home() {
  return (
    <div className="overflow-y-hidden bg-white">

      <Sidebar/>
      <About />

    </div>
  );
}
