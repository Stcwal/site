import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";
import { HtmlReader } from "./html-reader";
import { NaobReader } from "./naob-reader";

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
          <p className="text-black">Kansje en video ellerno?</p>
          <HtmlToText />
        </div>
        |
      </div>
    </div>
  );
}

export function HtmlToText() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">HTML to Text Preview</h1>
      {/* <NaobReader url="https://naob.no/ordbok/fotball" /> */}
    </div>
  );
}
