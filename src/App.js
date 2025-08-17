import "./App.css";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App({ data }) {


  const [answer, setanswer] = useState("  ");

  const customDark = {
    ...dark,
    'comment': {
      ...dark['comment'],
      color: '#00ff88', // your desired color
      fontStyle: 'italic'
    }
  };

 

  return (
    <div className="container">
      <div className="box">

        <SyntaxHighlighter  language="java" style={customDark}   customStyle={{ fontSize: '12px' }} onCopy={(e)=> e.preventDefault()} onContextMenu={(e) => e.preventDefault()}>
          {data.q}
        </SyntaxHighlighter>
        <p className="ans"> Ans here ...</p>
        <div className="input">
          <input
            type="text"
            placeholder="Answer here "
            style={{ padding: "30px" }}
            value={answer}
            onChange={(e)=> { (setanswer(e.target.value))}}
            className={(answer.trim()) === (data.ans) ? "pass" : "fail"}
          ></input>
        </div>

        <div className={answer.trim() === data.ans ? "Green" : "Red"}>
          {(answer.trim()) === (data.ans) ? (
            <h1>{data.hint}</h1>
          ) : (
            <h1 className="Hint">Please provide the correct answer based on the hint.</h1>
          )}
        </div>



        {/* <div className="note">
          <p>NOTE : <br></br> </p>
          <p> <b>[for Ex....]</b>  <br></br>for (int i=0 ;i n ; i++) <br></br> console.log( i ) <br></br>  <br></br> ans :<b> 0 1 2 3 4 5</b> (with Space) </p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
 

/* 
Links 
https://treasure-hunters-alpha.vercel.app/First
https://treasure-hunters-alpha.vercel.app/Second
https://treasure-hunters-alpha.vercel.app/Third
https://treasure-hunters-alpha.vercel.app/Fourth
https://treasure-hunters-alpha.vercel.app/Fifth
https://treasure-hunters-alpha.vercel.app/Sixth
https://treasure-hunters-alpha.vercel.app/Seventh
https://treasure-hunters-alpha.vercel.app/Eighth
https://treasure-hunters-alpha.vercel.app/Ninth

*/