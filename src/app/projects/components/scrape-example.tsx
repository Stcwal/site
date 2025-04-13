import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";
import { GetOne } from "@/app/api/proxy/naob";
import NaobParser from "./naob-parser";
import NaobField from "./naob-input";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");

// This helps with caching and prevents unnecessary rerenders
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function WordScrape({
  searchParams = {},
}: {
  searchParams?: { word?: string };
}) {
  // Get the word from URL params or use default with a null check
  const wordToFetch = searchParams?.word || "eksempel";

  const data = await GetOne(wordToFetch);
  const dataString = String(data);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Markdown
        content={content}
        className="text-left items-center justify-center max-w-4xl"
      />
      <div>
        <div className="mx-auto mb-4 items-center justify-center pt-4">
          <NaobField />
          <div className="mt-4">
            <Suspense fallback={<div>Loading...</div>}>
              <NaobParser htmlString={dataString} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
