declare module "react-markdown" {
  import React from "react";

  interface ReactMarkdownProps {
    children: string;
    remarkPlugins?: any[];
    components?: Record<string, React.ComponentType<any>>;
    className?: string;
  }

  const ReactMarkdown: React.FC<ReactMarkdownProps>;

  export default ReactMarkdown;
}

declare module "remark-gfm" {
  const remarkGfm: any;
  export default remarkGfm;
}
