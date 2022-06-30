const errorMsgEl = document.querySelector("#error-msg");
const errorMsg = "Oops! Please check your email";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailEl = document.getElementById("email");

function validate() {
  const email = emailEl.value;
  //
  if (emailRegex.test(email)) {
  } else {
    errorMsgEl.textContent = errorMsg;
    return false;
  }
}
