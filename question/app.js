// const wrapper = document.querySelector(".wrapper");
// const question = document.querySelector(".question");
// const gif = document.querySelector(".gif");
// const yesBtn = document.querySelector(".yes-btn");
// const noBtn = document.querySelector(".no-btn");

// yesBtn.addEventListener("click", () => {
//   question.innerHTML = "Aaaaa, I Love You too !!!";
//   gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

//   // Hide both buttons
//   yesBtn.style.display = "none";

// });

// noBtn.addEventListener("mouseover", () => {

//   const noBtnRect = noBtn.getBoundingClientRect();
//   const maxX = window.innerWidth - noBtnRect.width;
//   const maxY = window.innerHeight - noBtnRect.height;

//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";


//   // Show pop-up message
//   const popup = document.createElement("div");
//   popup.classList.add("popup");
//   popup.textContent = "Don't you love me?";
//   document.body.appendChild(popup);

//   // Remove the pop-up after 2 seconds
//   setTimeout(() => {
//       popup.remove();
//   }, 2000);

// });



const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const popup = document.querySelector(".popup");

// Array of different texts for the pop-up
const popUpTexts = [
    "Don't you love me?",
    "Why don't you love me?",
    "Am I not lovable?",
    "Is there something wrong with me?",
    "Try not to hide your feelings for me"
];

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I Love You too !!!";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

  // Hide both buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Randomly select a text from the array
    const randomIndex = Math.floor(Math.random() * popUpTexts.length);
    const randomText = popUpTexts[randomIndex];

    // Show pop-up message with the randomly selected text
    popup.textContent = randomText;
    popup.style.display = "block";

    // Remove the pop-up after 2 seconds
    setTimeout(() => {
        popup.textContent = "";
        popup.style.display = "none";
    }, 3000);
});

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, I Love You too !!!";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";

    // Hide both buttons
    yesBtn.style.display = "none";
});

