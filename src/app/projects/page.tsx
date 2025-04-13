import WordScrape from "./components/scrape-example";

export const dynamic = "force-dynamic";

export default function ProjectsPage({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // Pass the search params with a different name to avoid type conflicts
  return <WordScrape queryParams={searchParams} />;
}
