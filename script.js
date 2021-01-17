'use strict';

//queryselector is method on document oject

//DOM manipulation
/* 
console.log(document.querySelector('.message').
    //test 컨텐츠만 보여준다 
    textContent);
document.querySelector('.message').textContent = "Correct Number!!👺👺"

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value
*/
//value 는 html 발류를 마꾼다

//function expression
/* const x = function (){
    console.log(23)} */

/* secret number making because it is standard for comparison.1-20사이숫자중에서 Match.random 렌덤하게 숫자를 가져옴 0~<1 */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//
let score = 20; // it need to be mutable so that it would be let

//Event liseter : page 에나타는 이벤트를 만들어주는 메또우
// addEventlistner 만들고 어떤 click 이란 함수를 시행하는 걸 만들거다

// agian ㅎㅏ면 리셋되는거
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
document
  .querySelector('.check')
  // add event listener function experession 과 비슷 'click'은 이벤트 그냥 이름임, function 이 행동하는 펑션, call할필요 없다. function defined 만 되있음

  .addEventListener('click', function () {
    // check 버튼을 클릭하면 value 입력되는 fucntin
    // 우리가 사용하는 input 은 보통 string 받아오기 때문에 이것을 숫자로 비교할려면 숫자로 만들어야한다 *Number() function 이용
    const guess = Number(document.querySelector('.guess').value); // 먼저 이걸 변수에 집어넣고
    console.log(guess, typeof guess);
    //이게임은 처음에 벨류가 있나 없나에 따라 response 를받아 오기떄문에 value 가없다면 체크를 해도 0 이나온다 0 은flase

    //숫자가 아닌다른것 입력했을경우
    if (!guess) {
      document.querySelector('.message').textContent =
        'error, you need to put right value';
      // 게스가 아닌경우 즉 false
      // 우리가 사용하는 input 은 보통 string 받아오기 때문에 이것을 숫자로 비교할려면 숫자로 만들어야한다 *Number() function 이용
    } else if (guess > secretNumber) {
      if (score > 1) {
        // score
        document.querySelector('.message').textContent = `it is lower ${guess}`;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = `you lose your game`;
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = secretNumber;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(
          '.message'
        ).textContent = `it is higher ${guess}`;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = `you lose your game`;
        [];
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = secretNumber;
      }
    } else {
      //guess right
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'you are right';
      document.querySelector('.highscore').textContent = score;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.tr;
    }
  });
