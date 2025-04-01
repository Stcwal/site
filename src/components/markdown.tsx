import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function getMarkdownContent(filePath: string): string {
  const fullPath = path.join(process.cwd(), filePath);
  try {
    return fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    console.error(`Error reading file at ${fullPath}:`, error);
    return "";
  }
}

export default function Markdown({ content, className = "" }: MarkdownProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-xl font-bold mt-5 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-l font-bold mt-4 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-5 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-5 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => (
            <a className="text-blue-500 hover:underline" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 italic my-4"
              {...props}
            />
          ),
          code: ({
            node,
            inline,
            ...props
          }: {
            node?: any;
            inline?: boolean;
            className?: string;
          } & React.HTMLProps<HTMLElement>) =>
            inline ? (
              <code className="bg-gray-100 px-1 py-0.5 rounded" {...props} />
            ) : (
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
                <code {...props} />
              </pre>
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
