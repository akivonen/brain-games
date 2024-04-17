import randomize from './randomize.js';

const predicateGame = (predicateFunc, questionCount) => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionsAnswers = [];
  for (let i = 0; i < questionCount; i += 1) {
    const number = randomize(0, 100);
    const correctAnswer = predicateFunc(number) ? 'yes' : 'no';
    questionsAnswers.push({
      question: number,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
};

export default predicateGame;
