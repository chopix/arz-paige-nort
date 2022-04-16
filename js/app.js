// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 	Front-end часть - Chopix
// 	vk.com/chopixov

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 





function scrollTo(element) {
   element.scrollIntoView({behavior: "smooth"});

};


const buttonScroll = document.querySelector('.header');

const cardButton = document.querySelectorAll('.item-button');

for (let i = 0; i < cardButton.length; i++) {
      cardButton[i].addEventListener("click", function() {
         scrollTo(buttonScroll);
    });
}


// калькулятор
const AZ_COST = 2;
let calculatorInput =  document.getElementById('calculator__inner');
let calculatorOutput = document.getElementById('calc-output');
document.getElementById('sum').addEventListener('input', function() {
   calculatorInput.innerText = this.value;
   calculatorOutput.innerHTML = this.value * AZ_COST;
   if(this.value == '') {
      calculatorInput.innerText = '0.00';
      calculatorOutput.innerHTML = '0.00';
   }
});


