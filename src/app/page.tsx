import Image from "next/image";
import NavigationHeader from "../components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import InfoFooter from "@/components/footer";

export default function Home() {
  return (
    <div>
      <div className="flex-1 p-4 w-full flex flex-col items-center justify-center">
        <ScrollArea className="w-full max-w-3xl">
          <div className="text-center">
            <h1 className="font-sans text-2xl mb-2">Welcome!</h1>
            <p className="font-sans"></p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
