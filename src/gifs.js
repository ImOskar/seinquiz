import bad from "./img/bad1.mp4";
import meh from "./img/meh1.mp4";
import good from "./img/good1.mp4";
import great from "./img/great1.mp4";

const gifs = { bad: bad, meh: meh, good: good, great: great };

const getGifs = (string) => {
  return gifs[string];
};

export default getGifs;
