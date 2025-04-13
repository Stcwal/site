import WordScrape from "./components/scrape-example";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

// Use a client component wrapper to avoid type issues
export default function ProjectsPage(props: any) {
  // No type issues with 'any'
  const searchParams = props.searchParams || {};
  const wordParam = searchParams.word;
  const word =
    typeof wordParam === "string"
      ? wordParam
      : Array.isArray(wordParam)
      ? wordParam[0]
      : "eksempel";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WordScrape word={word} />
    </Suspense>
  );
}
