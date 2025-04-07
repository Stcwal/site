import { GET } from "./route";

export async function GetOne(params: string): Promise<string> {
  try {
    const request = `https://www.naob.no/ordbok/${params}`;
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server.");
    }

    const html = await response.text();
    console.log("Fetched data successfully");
    return html;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export function ExtractHtmlContent(
  htmlString: string,
  selector: string
): string | null {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const elements = doc.querySelectorAll(selector);

  if (elements.length === 0) {
    return null;
  }

  const extractedHtml = Array.from(elements)
    .map((el) => el.outerHTML)
    .join("");

  return extractedHtml;
}
