import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [mark, setMark] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);
  function markToggle(pos) {
    let temp = [...mark];
    // console.log(temp)
    if (mark[pos] === 0) {
      temp[pos] = player;
      setPlayer((player) => (player === 1 ? 2 : 1));
    }
    setMark(temp);
  }
  useEffect(() => {
    let combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let key of combinations) {
      if (mark[key[0]] === 1 && mark[key[1]] === 1 && mark[key[2]] === 1) {
        setTimeout(() => {
          alert("player1 won the match");
        }, 0);
      } else if (
        mark[key[0]] === 2 &&
        mark[key[1]] === 2 &&
        mark[key[2]] === 2
      ) {
        setTimeout(() => {
          alert("player2 won the match");
        }, 0);
      }
    }
  }, [mark]);
  return (
    <div className="App">
      <div className="row">
        <Box pos={0} mark={mark[0]} markToggle={markToggle} />
        <Box pos={1} mark={mark[1]} markToggle={markToggle} />
        <Box pos={2} mark={mark[2]} markToggle={markToggle} />
      </div>
      <div className="row">
        <Box pos={3} mark={mark[3]} markToggle={markToggle} />
        <Box pos={4} mark={mark[4]} markToggle={markToggle} />
        <Box pos={5} mark={mark[5]} markToggle={markToggle} />
      </div>
      <div className="row">
        <Box pos={6} mark={mark[6]} markToggle={markToggle} />
        <Box pos={7} mark={mark[7]} markToggle={markToggle} />
        <Box pos={8} mark={mark[8]} markToggle={markToggle} />
      </div>
    </div>
  );
}

function Box({ pos, mark, markToggle }) {
  return (
    <div className={`box mark${mark}`} onClick={() => markToggle(pos)}></div>
  );
}
