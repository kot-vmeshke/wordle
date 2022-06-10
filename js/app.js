import { dictionary } from './dictionary.js';

let word = dictionary[Math.floor(Math.random() * dictionary.length)];
let check = document.querySelector('#check');
let reset = document.querySelector('#reset');
let inputs = document.querySelectorAll('.letter');
let board = document.querySelector('.game-board');
let count = 1;
let chance = 6;
let lettersCount = 5;

board.addEventListener('click', () => {
  inputs.forEach((letter, index) => {
    letter.addEventListener('input', () => {
      if (letter.value.length > 0 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    })
  })
})

reset.addEventListener('click', () => {
  document.location.reload();
})

check.addEventListener('click', () => {
  if (count < chance) {
    let userWordArr = [];
    inputs.forEach(letter => {
      userWordArr.push(letter.value);
    })
    let userWord = userWordArr.join('');
    userWord = userWord.substring(userWord.length - lettersCount);
    if (!dictionary.includes(userWord)) {
      alert('word is not in dictionary')
    }
    if (word === userWord) {
      alert('Congratulation, you are win!');
      document.location.reload();
    }
    for (let i = 0; i < userWord.length; i++) {
      let k;
      switch (count) {
        case 2:
          k = 6;
          break;
        case 3:
          k = 11;
          break;
        case 4:
          k = 16;
          break;
        case 5:
          k = 21;
          break;
        case 6:
          k = 26;
          break;
        default:
          k = 1;
      }
      if (userWord[i] === word[i]) {
        document.querySelector(`#letter-${i + k}`).style.backgroundColor = '#6fc110';
        document.querySelector(`#letter-${i + k}`).style.borderColor = '#6fc110';
      } else if (word.includes(userWord[i])) {
        document.querySelector(`#letter-${i + k}`).style.backgroundColor = '#ffc107';
        document.querySelector(`#letter-${i + k}`).style.borderColor = '#ffc107';
      } else {
        document.querySelector(`#letter-${i + k}`).style.backgroundColor = '#c4c4c4';
        document.querySelector(`#letter-${i + k}`).style.borderColor = '#c4c4c4';
      }
    }
    count++;
  } else {
    alert(`Game over! The word was ${word}`);
    document.location.reload();
  }
})              