"use client";

import { useEffect, useState } from "react";

export function NaobReader({
  url,
  selector = ".articleContent",
}: {
  url: string;
  selector?: string;
}) {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(
          `/api/proxy?url=${encodeURIComponent(url)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch HTML content");
        }
        const text = await response.text();

        // Parse the HTML string
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        // Find all elements matching the selector
        const elements = doc.querySelectorAll(selector);

        if (elements.length === 0) {
          setError(`No elements found matching selector: ${selector}`);
          return;
        }

        // Extract just the content we want
        const extractedHtml = Array.from(elements)
          .map((el) => el.outerHTML)
          .join("");

        setHtmlContent(extractedHtml);
      } catch (error) {
        console.error("Error fetching HTML content:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchHtmlContent();
  }, [url, selector]);

  if (loading) return <div>Loading HTML content...</div>;
  if (error) return <div>Error loading content: {error}</div>;
  if (!htmlContent) return <div>No content available</div>;

  return (
    <div className="html-content bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
