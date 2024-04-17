const isEven = (num) => num % 2 === 0;
export default function even(questionCount = 3) {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAnswers = [];
  for (let i = 0; i < questionCount; i += 1) {
    const randomInt = Math.floor(Math.random() * 50);
    const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
    questionsAnswers.push({
      question: randomInt,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
}
