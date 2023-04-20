import Header from "@/components/header";
import Textbox from "@/components/textbox";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [assignmentInput, setAssignmentInput] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const maxLength = 500; // Adjust this value based on your needs
    const inputChunks = splitInput(assignmentInput, maxLength);
    const results = [];

    try {
      for (const chunk of inputChunks) {
        const response = await fetch("/api/hello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ assignment: chunk }),
        });

        const data = await response.json();
        if (response.status !== 200) {
          throw (
            data.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }

        results.push(data.result);
      }

      setResult(results.join("\n"));
      setAssignmentInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  function renderBulletPoints(output) {
    const lines = output.split("\n").filter((line) => line.trim() !== "");

    function boldPhrases(line) {
      const phrasesToBold = [
        "technical requirements:",
        "formatting and submission requirements:",
      ];

      let modifiedLine = line;

      phrasesToBold.forEach((phrase) => {
        const regex = new RegExp(phrase, "gi");
        modifiedLine = modifiedLine.replace(
          regex,
          (match) => `<strong>${match}</strong>`
        );
      });

      return modifiedLine;
    }
    return (
      <ul>
        {lines.map((line, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: boldPhrases(line) }}
          ></li>
        ))}
      </ul>
    );
  }
  function splitInput(input, maxLength) {
    const words = input.split(" ");
    const chunks = [];
    let currentChunk = "";

    words.forEach((word) => {
      if (currentChunk.length + word.length <= maxLength) {
        currentChunk += " " + word;
      } else {
        chunks.push(currentChunk.trim());
        currentChunk = word;
      }
    });

    if (currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  }

  return (
    <div className="h-screen bg-pool bg-cover bg-center p-6">
      <Header />
      <div className="bg-white  m-auto backdrop-blur-lg bg-opacity-20 rounded-3xl p-8">
        <h1 className="text-xl">Welcome!</h1>
        <p>Paste your assignment instructions below.</p>
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <Textbox
            value={assignmentInput}
            onChange={(e) => setAssignmentInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>

        <div>{result && renderBulletPoints(result)}</div>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-400"></div>
          </div>
        )}
      </div>
    </div>
  );
}
