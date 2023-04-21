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

    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ assignment: assignmentInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log(data.result);
      setResult(data.result);
      setAssignmentInput("");
    } catch (error) {
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
        "requirements:",
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
    function getIndentLevel(line) {
      const leadingSpaces = line.match(/^(\s+)/);
      return leadingSpaces ? leadingSpaces[0].length : 0;
    }

    function renderLineWithIndent(line, index) {
      const indentLevel = getIndentLevel(line);
      const paddingLeft = indentLevel * 10; // Adjust this value to increase/decrease the indent size
      const htmlContent = boldPhrases(line.trim());

      return (
        <li
          key={index}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ paddingLeft: `${paddingLeft}px` }}
        ></li>
      );
    }

    return (
      <ul>{lines.map((line, index) => renderLineWithIndent(line, index))}</ul>
    );
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
