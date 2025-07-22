const text = "Hello I'm frontend developer.";
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetween = 1500;

let index = 0;
let isDeleting = false;

const element = document.getElementById("typing");

function type() {
  if (!isDeleting) {
    // الكتابة حتى نهاية النص (index <= length)
    if (index <= text.length) {
      element.textContent = text.substring(0, index);
      index++;
      if (index > text.length) {
        // توقف قبل بدء المسح
        setTimeout(() => {
          isDeleting = true;
          type();
        }, delayBetween);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  } else {
    // المسح حتى 0
    if (index >= 0) {
      element.textContent = text.substring(0, index);
      index--;
      if (index < 0) {
        // توقف قبل بدء الكتابة من جديد
        setTimeout(() => {
          isDeleting = false;
          type();
        }, delayBetween);
      } else {
        setTimeout(type, erasingSpeed);
      }
    }
  }
}

type();

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000, // المدة بالملي ثانية
    once: true      // تظهر مرة واحدة فقط
  });
});