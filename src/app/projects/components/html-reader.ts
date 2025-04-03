"use client";
import { URL } from "url";

export async function HtmlReader(params: URL) {
  const url = params.searchParams.get("url") as string;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
  const html = await response.text();
  return html;
}
