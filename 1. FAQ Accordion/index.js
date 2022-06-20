// VARIABLES

// Get all inputs
const faqBtn = document.getElementsByName("faq");

// Get all answers
const answer = document.getElementsByClassName("answer");

// Get all FAQ items
const faqItems = document.getElementsByClassName("faq-item");

// EVENT LISTENER FOR CLICKING ON FAQ

for (let i = 0; i < faqItems.length; i++) {
  faqBtn[i].addEventListener("change", function () {
    if (faqBtn[i].checked) {
      answer[i].style.maxHeight = answer[i].scrollHeight + "px";
      answer[i].style.opacity = 1;
      faqBtn[i].setAttribute("aria-expanded", true)
      answer[i].setAttribute("aria-hidden", false)
    } else {
      answer[i].style.maxHeight = null;
      answer[i].style.opacity = 0;
      faqBtn[i].setAttribute("aria-expanded", false)
      answer[i].setAttribute("aria-hidden", true)
    }
  });
}
