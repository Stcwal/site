export async function GetOne(params: string): Promise<string> {
  try {
    const request = `https://www.naob.no/ordbok/${params}`;
    const response = await fetch(request, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      },
    });

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
