import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";
import { GetOne } from "@/app/api/proxy/naob";
import NaobParser from "./naob-parser";
import NaobField from "./naob-input";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");

export default async function WordScrape() {
  const data = await GetOne("eklatant");
  const dataString = "" + data;
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Markdown
        content={content}
        className="text-left items-center justify-center max-w-4xl"
      ></Markdown>
      <div>
        <div className="mx-auto mb-4 items-center justify-center pt-4">
          <NaobField />
          <NaobParser htmlString={dataString} />
        </div>
      </div>
    </div>
  );
}
