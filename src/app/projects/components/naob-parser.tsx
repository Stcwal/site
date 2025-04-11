"use client";

interface ParsedNaobData {
  word: string;
  wordClass: string;
  pronunciation: string;
  etymology: string;
  definitions: string[];
  examples: string[];
}

export default function NaobParser({ htmlString }: { htmlString: string }) {
  if (typeof window === "undefined") {
    return <div>Loading...</div>; // Handle server-side rendering case
  }
  const parsed = parseNaobHtml(htmlString);

  return (
    <div>
      <div className="flex">
        <p className="text-lg font-semibold">{parsed.word}</p>
        <p className="pl-2 pr-2 text-lg"> |</p>
        <p className="text-lg ">{parsed.wordClass}</p>
      </div>
      <div className="flex">
        <p className="text-m font-semibold pr-2">Uttale:</p>

        <p className="text-m">{parsed.pronunciation}</p>
      </div>
      <div className="flex">
        <p className="text-m font-semibold pr-2">Etymologi:</p>
        <p className="text-m">{parsed.etymology}</p>
      </div>
      <div className="flex">
        <p className="text-m font-semibold pr-2">Definisjon:</p>
        <p className="text-m">{parsed.definitions[0]}</p>
      </div>
    </div>
  );
}

function parseNaobHtml(htmlString: string): ParsedNaobData {
  try {
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Extract word
    const wordElement = doc.querySelector(".oppslagsord");
    const word = wordElement ? wordElement.textContent || "" : "";

    // Extract word class
    const wordClassElement = doc.querySelector(".ordklasseledd span");
    const wordClass = wordClassElement
      ? wordClassElement.textContent || ""
      : "";

    // Extract pronunciation - using a more compatible approach
    let pronunciationText = "";
    const divElements = doc.querySelectorAll("div");
    for (const div of divElements) {
      const overskriftElement = div.querySelector(".overskrift");
      if (
        overskriftElement &&
        overskriftElement.textContent?.includes("UTTALE")
      ) {
        pronunciationText = div.textContent?.replace("UTTALE", "").trim() || "";
        break;
      }
    }

    // Extract etymology - using a more compatible approach
    let etymology = "";
    for (const div of divElements) {
      const overskriftElement = div.querySelector(".overskrift");
      if (
        overskriftElement &&
        overskriftElement.textContent?.includes("ETYMOLOGI")
      ) {
        const etyElement = div.querySelector(".inline-eske");
        if (etyElement) {
          etymology = etyElement.textContent?.trim() || "";
        }
        break;
      }
    }

    // Extract definitions
    const definitionElements = doc.querySelectorAll(".betydning .inline-eske");
    const definitions = Array.from(definitionElements)
      .filter((el) => {
        // Filter out elements with certain classes
        return (
          !el.classList.contains("betydningsskiller") &&
          !el.classList.contains("redeks")
        );
      })
      .map((el) => el.textContent?.trim() || "")
      .filter((text) => text !== "");

    // Extract examples
    const exampleElements = doc.querySelectorAll(".redeks");
    const examples = Array.from(exampleElements)
      .map((el) => el.textContent?.trim() || "")
      .filter((text) => text !== "");

    return {
      word,
      wordClass,
      pronunciation: pronunciationText,
      etymology,
      definitions,
      examples,
    };
  } catch (error) {
    console.error("Error parsing HTML:", error);
    return {
      word: "",
      wordClass: "",
      pronunciation: "",
      etymology: "",
      definitions: [],
      examples: [],
    };
  }
}
