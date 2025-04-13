import { Suspense } from "react";
import Markdown, { getMarkdownContent } from "@/components/markdown";
import NaobField from "./components/naob-input";
import WordFetcher from "./components/word-fetcher";
import WordScrape from "./components/scrape-example";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");

export const dynamic = "force-dynamic";

// Don't use any Promise types here - use plain object types
export default function ProjectsPage(props: any) {
  // Safely extract the word parameter
  const searchParams = props.searchParams || {};
  const wordParam = searchParams.word;
  const wordToFetch =
    typeof wordParam === "string"
      ? wordParam
      : Array.isArray(wordParam)
      ? wordParam[0]
      : "eksempel";

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Markdown
        content={content}
        className="text-left items-center justify-center max-w-4xl"
      />
      <div className="mx-auto mb-4 items-center justify-center pt-4">
        <NaobField />
        <div className="mt-4">
          <Suspense fallback={<div>Loading...</div>}>
            <WordFetcher word={wordToFetch} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
