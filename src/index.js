import readlineSync from 'readline-sync';

const countOfQuestions = 3;
const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};
export default function app(game, questionsCount = countOfQuestions) {
  const { rules, questionsAnswers } = game(questionsCount);
  const userName = welcome();
  console.log(rules);
  for (let i = 0; i < questionsCount; i += 1) {
    const { question, correctAnswer } = questionsAnswers[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
