"use server";

import { GetOne } from "@/app/api/proxy/naob";

export async function fetchWordData(word: string) {
  try {
    const data = await GetOne(word);
    return { data: String(data), error: null };
  } catch (error) {
    console.error("Error fetching data for word:", word, error);
    return {
      data: null,
      error: `Failed to fetch data for "${word}". Please try again.`,
    };
  }
}
