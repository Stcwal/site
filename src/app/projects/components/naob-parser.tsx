interface ParsedNaobData {
  word: string;
  wordClass: string;
  pronunciation: string;
  etymology: string;
  definition?: string;
}

export default function NaobParser({ htmlString }: { htmlString: string }) {
  const parsed = parseNaobHtml(htmlString);

  return (
    <div>
      <div className="flex">
        <p className="text-lg font-semibold">{parsed.word}</p>
        <p className="pl-2 pr-2 text-lg"> |</p>
        <p className="text-lg ">{parsed.wordClass}</p>
      </div>
      {parsed.pronunciation && (
        <div className="flex">
          <p className="text-m font-semibold pr-2">Uttale:</p>
          <p className="text-m">{parsed.pronunciation}</p>
        </div>
      )}
      {parsed.etymology && (
        <div className="flex">
          <p className="text-m font-semibold pr-2">Etymologi:</p>
          <p className="text-m">{parsed.etymology}</p>
        </div>
      )}
      <div className="flex">
        <p className="text-m font-semibold pr-2">Beskrivelse:</p>
        <p className="text-m">{parsed.definition}</p>
      </div>
    </div>
  );
}

function parseNaobHtml(htmlString: string): ParsedNaobData {
  const html = htmlString.split(`<article`)[1]?.split(`</article>`)[0] || "";

  const word =
    html.split(`<span class="oppslagsord">`)[1]?.split(`</span>`)[0] || "";
  const wordClass =
    html
      .split(
        `<div class="ordklasseledd inline-eske">
                        <span>`
      )[1]
      ?.split(`</span>`)[0] || "";

  let rawPronunciation =
    html
      .split(`<span class="overskrift">UTTALE</span><span>`)[1]
      ?.split(`</span>`)[0] || "";

  // Format the pronunciation with brackets and replace HTML entities
  const pronunciation = formatToString(rawPronunciation);

  // Extract etymology content
  let rawEtymology =
    html
      .split(`<span class="overskrift">ETYMOLOGI</span>`)[1]
      ?.split(`</div>`)[0] || "";

  // First remove all HTML tags, then format the string
  rawEtymology = rawEtymology.replace(/<[^>]*>/g, " ").trim();

  // Replace multiple spaces with a single space
  rawEtymology = rawEtymology.replace(/\s+/g, " ");

  // Now format the HTML entities
  const etymology = formatToString(rawEtymology);

  let rawDefinition =
    html
      .split(`<div class="betydning">`)[1]
      ?.split(`<div class="sitatseksjon">`)[0] || "";

  rawDefinition = rawDefinition.replace(/<[^>]*>/g, " ").trim();
  const definition = formatToString(rawDefinition);

  return {
    word,
    wordClass,
    pronunciation,
    etymology,
    definition,
  };
}

function formatToString(rawWord: string): string {
  if (!rawWord) return "";

  // Convert common HTML entities to their corresponding characters
  return (
    rawWord
      .replace(/&acute;/g, "´") // Use the actual accented character instead of separate accent
      .replace(/&eacute;/g, "é") // Use the actual accented character instead of separate accent
      .replace(/&aacute;/g, "á") // Use the actual accented character instead of separate accent
      .replace(/&uacute;/g, "ú") // Use the actual accented character instead of separate accent
      .replace(/&iacute;/g, "í") // Use the actual accented character instead of separate accent
      .replace(/&yacute;/g, "ý") // Use the actual accented character instead of separate accent
      .replace(/&auml;/g, "ä") // Use the actual accented character with umlaut
      .replace(/&ouml;/g, "ö") // Use the actual accented character with umlaut
      .replace(/&uuml;/g, "ü") // Use the actual accented character with umlaut
      .replace(/&aring;/g, "å") // Use the actual å character
      .replace(/&aelig;/g, "æ") // Use the actual æ character
      .replace(/&oslash;/g, "ø") // Use the actual ø characterS
      .replace(/&nbsp;/g, " ") // Replace non-breaking spaces
      .replace(/&#39;/g, "'") // Replace apostrophe
      .replace(/&ldquo;/g, `"`) // Replace left double quote
      .replace(/&rdquo;/g, `"`) // Replace right double quote
      .replace(/&lsquo;/g, "'") // Replace left single quote
      .replace(/&rsquo;/g, "'") // Replace right single quote
      .replace(/&mdash;/g, "—") // Replace em dash
      .replace(/&ndash;/g, "–") // Replace en dash
      .replace(/&amp;/g, "&") // Replace ampersand
      .replace(/&lt;/g, "<") // Replace less than
      .replace(/&gt;/g, ">") // Replace greater than
      .replace(/&quot;/g, '"') // Replace double quote
      .replace(/&apos;/g, "'") // Replace apostrophe
      .replace(/&hellip;/g, "…") // Replace ellipsis
      // Add more replacements as needed

      // Use a generic pattern for any remaining HTML entities
      .replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(parseInt(dec, 10));
      })
  );
}
