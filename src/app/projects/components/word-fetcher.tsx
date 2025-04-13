import { Suspense } from "react";
import { GetOne } from "@/app/api/proxy/naob";
import NaobParser from "./naob-parser";

// This component handles fetching and displaying a single word
export default async function WordFetcher({ word }: { word: string }) {
  try {
    const data = await GetOne(word);

    // Check if data is valid (not empty or error response)
    if (!data || data === "undefined" || String(data).includes("not found")) {
      return (
        <div className="p-4 border rounded-md bg-red-50 text-red-700">
          <p className="font-semibold">Word not found</p>
          <p>Could not find "{word}" in the dictionary.</p>
        </div>
      );
    }

    const dataString = String(data);

    return (
      <Suspense fallback={<div>Loading word data...</div>}>
        <NaobParser htmlString={dataString} />
      </Suspense>
    );
  } catch (error) {
    console.error(`Error fetching data for word "${word}":`, error);

    // Return a user-friendly error message
    return (
      <div className="p-4 border rounded-md bg-red-50 text-red-700">
        <p className="font-semibold">Error</p>
        <p>
          Failed to fetch information for "{word}". Please try another word.
        </p>
        <p className="text-sm mt-2">
          {error instanceof Error ? error.message : "Unknown error occurred"}
        </p>
      </div>
    );
  }
}
