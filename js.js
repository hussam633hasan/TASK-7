//                      //part 1//
// //"Start Mission 1"//
function findMinMax(arr) {
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    console.log("Minimum element is:", minValue);
    console.log("Maximum Element is:", maxValue);
}
function main() {
    let num1 = parseInt(prompt("Enter the first integer:"));
    let num2 = parseInt(prompt("Enter the second integer:"));
    let num3 = parseInt(prompt("Enter the third integer:"));
    let arr = [num1, num2, num3];
    findMinMax(arr);
}
main();
// //"End Mission 1"//

// //"Start Mission 2"//
function checkChar(char) {
    char = char.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if (vowels.includes(char)) {
        console.log("Given character is a Vowel");
    } else {
        console.log("Given character is a Consonant");
    }
}
function check() {
    let userInput = prompt("Enter a character:");
    checkChar(userInput);
}
check();
// //"End Mission 2"//

// //"Start Mission 3"//
function generateMultiplicationTable(number) {

    for(let i = 1; i <= 12; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}
function multiply() {
    const number = parseInt(prompt('Enter an integer:'));
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid integer.");
        return;
    }
    generateMultiplicationTable(number);
}
multiply();
//"End Mission 3"//

//"Start Mission 4"//
function printEvenNumbers(upTo) {
    for (let i = 1; i <= upTo; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
function startTheProgram() {
    const userInput = parseInt(prompt('Enter a number:'));
    if (isNaN(userInput)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    printEvenNumbers(userInput);
}
startTheProgram();

// //"End Mission 4"//

// //"Start Mission 5"//
function calculateMarks(marks) {
    let total = marks.reduce((a, b) => a + b, 0);
    let average = total / marks.length;
    let percentage = (total / (marks.length * 100)) * 100;
    console.log(`Total Marks: ${total}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}
function startTheMission() {
    let marks = [];
    for (let i = 0; i < 5; i++) {
        let mark = parseInt(prompt(`Enter marks for Subject ${i + 1}:`));
        marks.push(mark);
    }
    calculateMarks(marks);
}
startTheMission();
// //"End Mission 5"//

// //"Start Mission 6"//
function calculatePercentageAndGrade(marks) {
    let grades = ['F', 'D', 'C', 'B', 'A'];
    for (let i = 0; i < marks.length; i++) {
        let percentage = (marks[i] / 100) * 100;
        let grade = grades[Math.floor(percentage / 20)];
        console.log(`Subject: ${['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer'][i]}`);
        console.log(`Marks: ${marks[i]}`);
        console.log(`Percentage: ${percentage.toFixed(2)}%`);
        console.log(`Grade: ${grade}`);
    }
}
function startTheFinallyMission() {
    let marks = [];
    for (let i = 0; i < 5; i++) {
        let mark = parseInt(prompt(`Enter marks for ${['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer'][i]}:`));
        marks.push(mark);
    }
    calculatePercentageAndGrade(marks);
}
startTheFinallyMission();
// //"End Mission 6"//

                          //part 2//
//"Start Mission 1"//

{
    let body = document.querySelector('.cardtask1');
    const divBody = document.querySelector("#changeColor1")
divBody.addEventListener('click', function() {
    
    document.getElementById("cardtask1").style.backgroundColor = 'blue'; 
});
}
{
    const divBody = document.querySelector("#changeColor2")
divBody.addEventListener('click', function() {
    
    document.getElementById("cardtask1").style.backgroundColor = 'green'; 
});
}
{
    const divBody = document.querySelector("#changeColor3")
divBody.addEventListener('click', function() {
    
    document.getElementById("cardtask1").style.backgroundColor = '#47e6a7'; 
});
}
{
    const divBody = document.querySelector("#changeColor4")
divBody.addEventListener('click', function() {
    
    document.getElementById("cardtask1").style.backgroundColor = '#5d5c58'; 
});
}
//"End Mission 1"//

//"Start Mission 2"//
let body = document.querySelector('.task2');
let dark_mode_btn = document.querySelector('.dark_mode_btn');
let dark_mode_status = false;
dark_mode_btn.addEventListener('click', function(){
  body.classList.toggle('dark_mode_active');
  if (dark_mode_status == false) {
    this.innerHTML = '<i class="fa-regular fa-sun" aria-hidden="true"></i>';
    dark_mode_status = true;
  }else{
    this.innerHTML = '<i class="fa-regular fa-moon"></i>';
     dark_mode_status = false;
  }
});
//"End Mission 2"//

//"Start Mission 3"//
document.querySelectorAll('.accordion-title').forEach(item => {
    item.addEventListener('click', function() {
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
//"End Mission 3"//

//"Start Mission 4"//
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
      document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('gold');
      });
  
      let selectedStars = Array.from(document.querySelectorAll('.star'));
      selectedStars.forEach((star, index) => {
        if (index < this.dataset.value == 1) {
          star.classList.add('gold');
        }
      });
      let ratingOutput = document.getElementById('rating-output');
      ratingOutput.textContent = `Rating: ${this.dataset.value}/5`;
    });
  });
//"End Mission 4"//