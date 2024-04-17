import randomize from './utils/randomize.js';

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
export default function prime(questionCount = 3) {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAnswers = [];
  for (let i = 0; i < questionCount; i += 1) {
    const number = randomize(0, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    questionsAnswers.push({
      question: number,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
}
