import randomize from '../utils/randomize.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};
const gcd = (questionCount = 3) => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const questionsAnswers = [];
  for (let i = 0; i < questionCount; i += 1) {
    const firstNum = randomize(1, 50);
    const secondtNum = randomize(1, 50);
    const numPair = [firstNum, secondtNum].join(' ');
    const correctAnswer = getGCD(firstNum, secondtNum).toString();
    questionsAnswers.push({
      question: numPair,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
};

export default gcd;
