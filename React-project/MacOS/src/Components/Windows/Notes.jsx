import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Notes.scss";
import MacWindow from "./MacWindow";

const Notes = () => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./notes.md")
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      });
  }, []);

  return (
    <MacWindow>
      <div className="Note-Window">
        {loading ? (
          <div className="notes-loading">Loading Notes…</div>
        ) : (
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </Markdown>
        )}
      </div>
    </MacWindow>
  );
};

export default Notes;
