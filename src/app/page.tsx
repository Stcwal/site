import Image from "next/image";
import NavigationHeader from "../components/header";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div>
      <NavigationHeader />
      <div className="p-4 w-auto text-center">
        <ScrollArea>
          <h1 className="font-sans text-2xl">Welcome</h1>
          <a className="font-sans">This is my eportfolio !</a>
        </ScrollArea>
      </div>
    </div>
  );
}
