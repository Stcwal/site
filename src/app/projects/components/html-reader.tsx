"use client";

import { useEffect, useState } from "react";

export function HtmlReader({ url }: { url: string }) {
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
        setHtmlContent(text);
      } catch (error) {
        console.error("Error fetching HTML content:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchHtmlContent();
  }, [url]);

  if (loading) return <div>Loading HTML content...</div>;
  if (error) return <div>Error loading content: {error}</div>;
  if (!htmlContent) return <div>No content available</div>;

  return (
    <div className="html-content">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
