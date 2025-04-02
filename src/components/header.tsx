import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function NavigationHeader() {
  return (
    <div className="bg-secondary">
      <div className="pt-4 pl-4 pr-4">
        <div className="w-full flex justify-between pb-4">
          <div className="flex space-x-4 pt-2">
            <Link href={`/`}>
              <strong className="">WALMANN.PARTY</strong>
            </Link>
            <div>|</div>
            <Link href={`/cv`} passHref>
              <div className="border-neutral-500 hover:underline">CV</div>
            </Link>
            <Link href={`/projects`} passHref>
              <div className="border-neutral-500 hover:underline">Projects</div>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
      <hr className="border-t border-neutral-500 w-full" />
    </div>
  );
}
