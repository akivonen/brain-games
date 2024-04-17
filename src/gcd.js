export default function gcd(questionCount = 3) {
  const rules = 'Find the greatest common divisor of given numbers.';
  const questionsAnswers = [];
  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return getGCD(b, a % b);
  };
  for (let i = 0; i < questionCount; i += 1) {
    const firstNum = Math.floor(Math.random() * 50) + 1;
    const secondtNum = Math.floor(Math.random() * 50) + 1;
    const numPair = [firstNum, secondtNum].join(' ');
    const correctAnswer = getGCD(firstNum, secondtNum).toString();
    questionsAnswers.push({
      question: numPair,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
}
