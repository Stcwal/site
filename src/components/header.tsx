import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import LinkedIn from "./linkedin";

export default function NavigationHeader() {
  return (
    <div className="backdrop-blur fixed top-0 left-0 right-0 z-50">
      <div className="p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex space-x-4 items-center">
            <Link href={`/`}>
              <strong className="">STIAN WALMANN</strong>
            </Link>
            <div>|</div>
            <Link href={`/cv`} passHref>
              <div className="border-neutral-500 hover:underline">CV</div>
            </Link>
            <Link href={`/projects`} passHref>
              <div className="border-neutral-500 hover:underline">Projects</div>
            </Link>
            {/* <Link href={`/contact`} passHref>
              <div className="border-neutral-500 hover:underline">Contact</div>
            </Link> */}
          </div>
          <div className="flex space-x-4 items-center">
            <LinkedIn />
            <ThemeToggle />
          </div>
        </div>
      </div>
      <hr className="border-t border-neutral-500 w-full mt-2" />
    </div>
  );
}
