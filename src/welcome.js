import readlineSync from 'readline-sync';

export default function welcome() {
  console.log('Welcome to the Brain Game Even!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
}
