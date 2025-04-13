import NavigationHeader from "@/components/header";
import WordScrape from "./components/scrape-example";

export const dynamic = "force-dynamic";

export default function ProjectsPage({
  searchParams = {},
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <WordScrape searchParams={searchParams} />;
}
