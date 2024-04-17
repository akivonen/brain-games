import predicateGame from '../utils/predicateGame.js';

const isEven = (num) => num % 2 === 0;
const even = (questionCount = 3) => predicateGame(isEven, questionCount);

export default even;
