import bad1 from "./img/bad1.mp4";
import bad2 from "./img/bad2.mp4";
import bad3 from "./img/bad3.mp4";
import meh1 from "./img/meh1.mp4";
import meh2 from "./img/meh2.mp4";
import meh3 from "./img/meh3.mp4";
import good1 from "./img/good1.mp4";
import good2 from "./img/good2.mp4";
import good3 from "./img/good3.mp4";
import great1 from "./img/great1.mp4";
import great2 from "./img/great2.mp4";
import great3 from "./img/great3.mp4";

const gifs = [
  [bad1, bad2, bad3],
  [meh1, meh2, meh3],
  [good1, good2, good3],
  [great1, great2, great3],
];

const getGifs = (string) => {
  const random = Math.floor(Math.random() * 3);
  if (string === "bad") return gifs[0][random];
  else if (string === "meh") return gifs[1][random];
  else if (string === "good") return gifs[2][random];
  else return gifs[3][random];
};

export default getGifs;
