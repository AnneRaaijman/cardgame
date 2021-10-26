import fighter1 from "../Fighters/1.jpeg";
import fighter2 from "../Fighters/2.jpeg";
import fighter3 from "../Fighters/3.jpeg";
import fighter4 from "../Fighters/4.jpeg";
import fighter5 from "../Fighters/5.jpeg";
import fighter6 from "../Fighters/6.jpeg";
import fighter7 from "../Fighters/7.jpeg";
import fighter8 from "../Fighters/8.jpeg";
import fighter9 from "../Fighters/9.jpeg";
import fighter10 from "../Fighters/10.jpeg";
import fighter11 from "../Fighters/11.jpeg";
import fighter12 from "../Fighters/12.jpeg";
import fighter13 from "../Fighters/13.jpeg";
import fighter14 from "../Fighters/14.jpeg";
import fighter15 from "../Fighters/15.jpeg";
import fighter16 from "../Fighters/16.jpeg";
import fighter17 from "../Fighters/17.jpeg";
import fighter18 from "../Fighters/18.jpeg";
import fighter19 from "../Fighters/19.jpeg";
import fighter20 from "../Fighters/20.jpeg";
import fighter21 from "../Fighters/21.jpeg";
import fighter22 from "../Fighters/22.jpeg";
import fighter23 from "../Fighters/23.jpeg";
import fighter24 from "../Fighters/24.jpeg";
import fighter25 from "../Fighters/25.jpeg";

export const fighters = [
  fighter1,
  fighter2,
  fighter3,
  fighter4,
  fighter5,
  fighter6,
  fighter7,
  fighter8,
  fighter9,
  fighter10,
  fighter11,
  fighter12,
  fighter13,
  fighter14,
  fighter15,
  fighter16,
  fighter17,
  fighter18,
  fighter19,
  fighter20,
  fighter21,
  fighter22,
  fighter23,
  fighter24,
  fighter25,
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(fighters);

console.log(fighters);
