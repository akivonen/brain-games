import predicateGame from '../utils/predicateGame.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const halfNum = Math.floor(num / 2);
  for (let i = halfNum; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const prime = (questionCount = 3) => predicateGame(rules, isPrime, questionCount);

export default prime;
