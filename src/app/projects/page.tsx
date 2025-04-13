import WordScrape from "./components/scrape-example";

export const dynamic = "force-dynamic";

// The correct way to type a Next.js App Router page component
interface PageProps {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProjectsPage(props: PageProps) {
  // Extract searchParams and pass it to WordScrape
  return <WordScrape searchParams={props.searchParams} />;
}
