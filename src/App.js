import "./App.css";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App({ data }) {


  const [answer, setanswer] = useState("  ");

  const onChange = (e) => {
    setanswer(e.target.value);
  };

  return (
    <div className="container">
      <div className="box">

        <SyntaxHighlighter  language="javascript" style={dark}   customStyle={{ fontSize: '12px' }} >
          {data.q}
        </SyntaxHighlighter>

        <div className="input">
          <input
            type="text"
            placeholder="ans here "
            style={{ padding: "30px" }}
            value={answer}
            onChange={onChange}
            className={(answer.trim()) === (data.ans) ? "pass" : "fail"}
          ></input>
        </div>

        <div className="Hint">
          {(answer.trim()) === (data.ans) ? (
            <h1 style={{color: "green"}}>{data.hint}</h1>
          ) : (
            <h1> Enter a correct ans for the HINT</h1>
          )}
        </div>



        <div className="note">
          <p>NOTE : <br></br> </p>
          <p> <b>[for Ex....]</b>  <br></br>for (int i=0 ;i n ; i++) <br></br> console.log( i ) <br></br>  <br></br> ans :<b> 0 1 2 3 4 5</b> (with Space) </p>
        </div>
      </div>
    </div>
  );
}

export default App;
