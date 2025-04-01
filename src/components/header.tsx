import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavigationHeader() {
  return (
    <div className="p-4">
      <div className="pb-2 flex space-x-4">
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
      <hr className="border-t border-neutral-500 w-full" />
    </div>
  );
}
