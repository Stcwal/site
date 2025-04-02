import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InfoFooter() {
  return (
    <div className="bg-secondary pb-2">
      <hr className="border-t border-neutral-500 w-full" />

      <div className="p-4">
        <p className="font-bold text-center ">Contact information</p>
        <div className="flex justify-center">
          <div className="flex p-4">
            <div>
              <p className="font-bold pr-4">
                Name: <br />
                Email: <br />
                Phone: <br />
              </p>
            </div>
            <div className="pr-4">
              <p>
                Stian Closs Walmann <br />
                stwalmann@outlook.com <br />
                +47 953 36 953 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
