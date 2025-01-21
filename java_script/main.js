const career = [
  "Fullstack Web Developer. |",
  "Quality Assurance / Quality Engineer. |",
  "Software Engineer. |",
  "Creative Problem Solver. |",
  "User Interface Designer. |"
]

const career_element = document.getElementById("career");

let textIndex = 0;
let charIndex = 0;
const displayInterval = 2000;
const typingSpeed = 50;

const typeText = () => {
  if (charIndex < career[textIndex].length) {
    career_element.textContent += career[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, displayInterval);
  }
}

const eraseText = () => {
  if (career_element.textContent.length > 0) {
    career_element.textContent = career_element.textContent.slice(0, -1);
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % career.length;
    charIndex = 0;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();

let hum_menu = document.getElementsByClassName("menu-icon")[0];
hum_menu.addEventListener('click', () => {
  let list = document.getElementsByClassName("nav-links")[0];
  let display = getComputedStyle(list).display === 'none' ? 'flex' : 'none';
  list.style.display = display;
});

// window.addEventListener('resize', function() {
//   if (window.innerWidth < 320) {
//     window.resizeTo(320, window.innerHeight);
//   }
//   if (window.innerHeight < 480) {
//     window.resizeTo(window.innerWidth, 480);
//   }
// });
