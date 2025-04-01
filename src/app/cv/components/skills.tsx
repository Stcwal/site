import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";

const cvContent = getMarkdownContent("src/app/cv/mdfiles/skills.md");

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Markdown content={cvContent} className="text-left"></Markdown>
      </Suspense>
    </div>
  );
}
