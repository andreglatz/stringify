import { useState } from "react";
import { TextArea, Clipboard } from "./components";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (event: { target: { value: string } }) => {
    if (isCopied) setIsCopied(false);

    const input = event.target.value;
    setInput(input);

    const isEmpty = input.length ? false : true;

    let output = "";

    if (!isEmpty) {
      const json = JSON.stringify(input);
      const withoutScapes = json.replace(/\\n|\\t|\\r/g, "");
      const withoutSpaces = withoutScapes.replace(/\s(?=\W|(\d,))/g, "");

      output = withoutSpaces;
    }

    setOutput(output);
  };

  return (
    <div className="bg-zinc-900 w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-zinc-50 text-3xl font-semibold mb-10">Stringify</h1>

      <div className="flex items-center justify-center h-3/4 space-x-10 relative">
        <TextArea label="JSON" placeholder="{ “foo”: “bar” }" value={input} onChange={handleChange} />
        <TextArea label="Text" placeholder="“{\“foo\”:\“bar\” }”" value={output} disabled copyToClipboard />

        <div className="absolute top-0 right-0">
          <Clipboard value={output} onClick={() => setIsCopied(true)} isCopied={isCopied} />
        </div>
      </div>

      <p className="mt-6 text-zinc-500">
        Made by{" "}
        <a className="text-teal-500" target="_blank" href="https://github.com/andreglatz">
          André Glatz
        </a>
      </p>
    </div>
  );
}

export default App;
