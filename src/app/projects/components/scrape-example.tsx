import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";
import { HtmlReader } from "./html-reader";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");

export default function WordScrape() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Markdown
          content={content}
          className="text-left items-center justify-center mx-auto w-1/2"
        ></Markdown>
      </Suspense>
      <div className="rounded-lg border border-gray-300 shadow-md bg-white w-1/2 mx-auto mt-6">
        <div className="w-1/2 h-[50vh] mx-auto mb-4 items-center justify-center">
          <p className="text-black">
            Kansje en video ellerno?
            {/* <HtmlReader url={new URL(`https://naob.no/ordbok/fotball`)} /> */}
          </p>
        </div>
        |
      </div>
    </div>
  );
}
