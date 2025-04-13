import WordScrape from "./components/scrape-example";

export const dynamic = "force-dynamic";

// Remove the custom PageProps interface
export default function ProjectsPage({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <WordScrape searchParams={searchParams} />;
}
