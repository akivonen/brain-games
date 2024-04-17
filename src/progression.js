import randomize from './utils/randomize.js';

export default function progression(questionCount = 3) {
  const rules = 'What number is missing in the progression?';
  const arrayLength = randomize(5, 15);
  const questionsAnswers = [];
  for (let i = 0; i < questionCount; i += 1) {
    const step = randomize(2, 5);
    const numbers = [];
    const startEl = randomize(1, 20);
    const endEl = startEl + (arrayLength * step);
    for (let j = startEl; j <= endEl; j += step) {
      numbers.push(j);
    }
    const blankEl = randomize(0, arrayLength);
    const correctAnswer = numbers[blankEl].toString();
    numbers[blankEl] = '..';
    const question = numbers.join(' ');
    questionsAnswers.push({
      question,
      correctAnswer,
    });
  }
  return { rules, questionsAnswers };
}
