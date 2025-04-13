import Career from "./components/career";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Vertical from "./components/verticalLine";

export default function Page() {
  return (
    <div className="items-center pb-20">
      <div>
        <Education />
        <Vertical />
        <Career />
        <Vertical />
        <Experience />
        <Vertical />
        <Skills />
      </div>
    </div>
  );
}
