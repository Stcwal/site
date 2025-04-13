"use client";

import { useState } from "react";

export default function NaobInput() {
  const [word, setWord] = useState("eklatant");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div>
      <form>
        <input
          className="border-2 border-primary rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-accent"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          className="hover:bg-accent rounded-md px-4 py-2 text-white bg-primary"
          onClick={() => setIsSearching(true)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
