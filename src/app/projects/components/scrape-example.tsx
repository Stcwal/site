import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";
import { GetOne } from "@/app/api/proxy/naob";
import NaobParser from "./naob-parser";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");
const htmlContent = await GetOne("eklatant");

export default function WordScrape() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Markdown
          content={content}
          className="text-left items-center justify-center mx-auto w-1/2"
        ></Markdown>
      </Suspense>
      <div>
        <div className="w-1/2 h-[50vh] mx-auto mb-4 items-center justify-center">
          <p className="text-black">Kansje en video ellerno?</p>
          <HtmlToText />
        </div>
      </div>
    </div>
  );
}

function HtmlToText() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">HTML to Text Preview</h1>
      <div className="text-left">
        <NaobParser htmlString={htmlContent} />
      </div>
    </div>
  );
}
