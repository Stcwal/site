import Markdown, { getMarkdownContent } from "@/components/markdown";
import NaobField from "./naob-input";
import WordFetcher from "./word-fetcher";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");

// No longer need to be async since we delegate data fetching
export default function WordScrape({ word = "eksempel" }: { word?: string }) {
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
            <WordFetcher word={word} />
          </div>
        </div>
      </div>
    </div>
  );
}
