import NavigationHeader from "@/components/header";
import Career from "./components/career";
import Education from "./components/education";
import Expreience from "./components/experience";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Vertical from "./components/verticalLine";

export default function Page() {
  return (
    <div className="text-center">
      <NavigationHeader />
      <div>
        <Education />
        <Vertical />
        <Career />
        <Vertical />

        <Expreience />
        <Vertical />

        <Skills />
        <Vertical />

        <Contact />
      </div>
    </div>
  );
}
