
import { useState } from "react";
import answers from "./answers";
import "./EightBall.css"; 


const EightBall = (props) => {
   
const [message, setMessage] = useState("Think of a question");
const [color, setColor] = useState('black');
const [restart, setRestart] = useState(false);
const getEightBallResponse = () => {
    const genRandom = () => Math.floor(Math.random() * answers.length);
    const { msg, color} = answers[genRandom()];
    setMessage(msg);
    setColor(color);
    setRestart(true);
};

const handleRestart = () => {
    setMessage("Think of a question");
    setColor("black");
    setRestart(false);
  };

    

    return (
        <div>
        <div
        className="eight-ball"
        style={{ backgroundColor: color }}
        onClick={getEightBallResponse}
      >
        {message}
      </div> 
      { restart && (
        <button className="restart-button" onClick={handleRestart}>
          Click Restart to Ask another question
        </button>
      )}
    </div>
  );
};
  
  export default EightBall;
  