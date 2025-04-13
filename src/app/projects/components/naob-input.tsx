"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NaobField() {
  const [word, setWord] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim()) return;

    // Update URL with search parameter
    router.push(`?word=${encodeURIComponent(word.trim())}`);
  };

  return (
    <div className="pb-4">
      <form onSubmit={handleSubmit}>
        <div className="border-2 rounded-md bg-secondary flex-col md:flex-row items-center inline-block">
          <input
            className="px-4 py-2 mr-2 focus:outline-none focus:border-accent"
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a Norwegian word"
          />
          <button
            type="submit"
            className="hover:bg-secondary bg-accent rounded-md px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
