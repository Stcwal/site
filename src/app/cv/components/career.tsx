import Markdown, { getMarkdownContent } from "@/components/markdown";

const cvContent = getMarkdownContent("srq/app/cv/mdfiles/career.md");

export default function Career() {
  return (
    <div>
      <Markdown content={cvContent}></Markdown>
    </div>
  );
}
