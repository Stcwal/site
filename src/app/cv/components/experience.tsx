import Markdown, { getMarkdownContent } from "@/components/markdown";
import { Suspense } from "react";

const cvContent = getMarkdownContent("src/app/cv/mdfiles/experience.md");

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-2xl font-bold mt-6 mb-4">Experience</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Markdown content={cvContent} className="text-left"></Markdown>
      </Suspense>
    </div>
  );
}
