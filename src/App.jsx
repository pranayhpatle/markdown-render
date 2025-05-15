import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import TypingEffect from "./typewriter";

function App() {
  const defaultMarkdown = `# Hi, *Pluto*! 
## h2
### h3

<p style="color:red">This text is in red</p>
<p style="color:green">This text is in green</p> `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [typing, setTyping] = useState(false); 
  const [speed, setSpeed] = useState(200); 

  console.log(speed)
  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor="markdown-input">Enter Markdown:</label>
      <br />
      <textarea
        id="markdown-input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows={10}
        cols={200}
        style={{ marginBottom: "1rem", width: "100%" }}
      />
      <hr />
      <label>
        <input
          type="checkbox"
          checked={typing}
          onChange={() => setTyping(!typing)}
        />
        Enable Typing Effect
      </label>
      <hr />
      <label>
      Typing Speed  
        <input
          type="number"
          defaultValue={speed}
          style={{margin:"10px"}}
          onChange={(e) => setSpeed(e.target.value)}
        />
      
      </label>
      <h3>Preview:</h3>
      <div className="markdown-wrapper">
        {typing ? (
          <TypingEffect key={[markdown,speed]} markdownText={markdown} speed={speed}/>
        ) : (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default App;
