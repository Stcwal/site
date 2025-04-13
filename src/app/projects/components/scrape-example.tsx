import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";
import { GetOne } from "@/app/api/proxy/naob";
import NaobParser from "./naob-parser";
import NaobField from "./naob-input";

export const dynamic = "force-dynamic";

const content = getMarkdownContent("src/app/projects/mdfiles/wordscrape.md");

export default async function WordScrape({
  queryParams = {},
}: {
  queryParams?: { [key: string]: string | string[] | undefined };
}) {
  // Await the queryParams if it's a Promise
  const resolvedParams = await Promise.resolve(queryParams);

  // Now use the resolved params
  const wordParam = resolvedParams?.word;
  const wordToFetch =
    typeof wordParam === "string"
      ? wordParam
      : Array.isArray(wordParam)
      ? wordParam[0]
      : "eksempel";

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
