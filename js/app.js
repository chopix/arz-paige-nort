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