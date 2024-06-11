import image1 from "./images/man_hang.png";
import image2 from "./images/man_dead.png";
import image3 from "./images/thank_you.png";
import "./components_css/home.css";
import { useState } from "react";
import { words } from "./word";

export default function Home() {
  const [word, setword] = useState("");
  return (
    <div>
      <div id="start">
        <div id="header">
          <p id="hone">Welcome to</p>
          <p id="htwo">Guess the Word Game</p>
        </div>
        <div id="sbutton">
          <button id="sbut" onClick={start}>
            Start
          </button>
        </div>
        <footer id="footer">All Right Reserved By Khizar Ali&reg;</footer>
      </div>

      <div id="game">
        <div>
          <div id="main">
            <p id="m">Guess the Word</p>
          </div>
          <p id="mone"></p>
          <div id="w">
            <div id="word"></div>
          </div>
          <img src={image1} alt="images" id="mtwo" />
          <p id="mthree"></p>
          <div id="input">
            <p id="inppara">Enter your Guess :</p>
            <input
              type="text"
              maxLength={1}
              id="mfour"
              value={word}
              onInput={(evt) => {
                setword(evt.target.value.toLowerCase());
              }}
              onChange={functioning}
            />
          </div>

          <p id="guess">5 Wronge Guess Remaining</p>
          <div id="restart">
            <button id="rbut" onClick={restart}>
              Re-Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

let num = Math.floor(Math.random() * 35);

function start() {
  let x = document.getElementById("start");
  let y = document.getElementById("game");
  x.style.display = "none";
  y.style.display = "contents";
  numbers();
}

function numbers() {
  let x = document.getElementById("word");
  let str = words[num].toString();
  let letters = document.getElementById("mone");
  let score = document.getElementById("mthree");
  score.innerHTML = "Your Score is : 0";
  letters.innerHTML = `This Word has ${str.length} Letters`;
  let aa = 0;

  while (aa < str.length) {
    let y = document.createElement("p");
    x.appendChild(y);
    y.className = "para";
    y.innerHTML = str[aa];
    aa++;
  }
}

let score = 0;
let guessess = 5;
let con = 0;

let arr = [];
let check = 0;
function functioning() {
  let input = document.getElementById("mfour");
  let x = input.value.toLowerCase();
  console.log(x);
  let y = document.getElementsByClassName("para");
  let z = document.getElementById("mthree");
  let guess = document.getElementById("guess");
  let img = document.getElementById("mtwo");
  let c = 0;
  let str = words[num];
  let count = 0;

  // let search = arr.join("");
  if (arr.includes(x)) {
    check = 1;
  }
  if (check === 0) {
    if (con < str.length) {
      while (c < str.length) {
        if (x === str[c]) {
          y[c].style.color = "red";
          score += 10;
          arr[c] = x;
          z.innerHTML = `Your Score is : ${score}`;
          count++;
          con++;
        }
        if (x === "") {
          count++;
        }
        c++;
      }
      if (guessess > 0) {
        if (count === 0) {
          guessess--;
          guess.innerHTML = `${guessess} Wronge Guess Remaining`;
        }
      }
      if (guessess === 0) {
        img.src = image2;
        input.style.display = "none";
        guess.innerHTML =
          "Sorry number of guessess are finished. Please restart the game !!!";
      }
    }
  }
  if (con === str.length) {
    img.src = image3;
    input.style.display = "none";
    guess.innerHTML = "Excellent You Guess the Word.";
  }
  check = 0;
}

function restart() {
  window.location.reload();
}
