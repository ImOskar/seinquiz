import bad1 from './img/bad1.gif';
import bad2 from './img/bad2.gif';
import bad3 from './img/bad3.gif';
import meh1 from './img/meh1.gif';
import meh2 from './img/meh2.gif';
import meh3 from './img/meh3.gif';
import good1 from './img/good1.gif';
import good2 from './img/good2.gif';
import good3 from './img/good3.gif';
import great1 from './img/great1.gif';
import great2 from './img/great2.gif';
import great3 from './img/great3.gif';


const gifs = [
    [
        bad1,
        bad2,
        bad3
    ],
    [
        meh1,
        meh2,
        meh3
    ],
    [
        good1,
        good2,
        good3
    ],
    [
        great1,
        great2,
        great3
    ]
];

const getGifs = (string) => {
    const random = Math.floor(Math.random() * 3);
    if (string === 'bad') return gifs[0][random];
    else if (string === 'meh') return gifs[1][random];
    else if (string === 'good') return gifs[2][random];
    else return gifs[3][random];
}

export default getGifs;