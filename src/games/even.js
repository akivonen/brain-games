import predicateGame from '../utils/predicateGame.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const even = (questionCount = 3) => predicateGame(rules, isEven, questionCount);

export default even;
