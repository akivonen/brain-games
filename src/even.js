import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const isEven = (num) => num % 2 === 0;
const countOfQuestions = 3;
export default function even(questionsCount = countOfQuestions) {
  const userName = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < questionsCount; i += 1) {
    const randomInt = Math.floor(Math.random() * 50);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, Bill!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
