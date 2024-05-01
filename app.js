let generateBtn = document.querySelector(".generate-btn");
let otpTxt = document.querySelector(".otp");
let copyBtn = document.querySelector(".copy-btn");

let len = 6;

let generateOtp = () => {
  let otp =
    Math.floor(Math.random() * (9 * Math.pow(10, len - 1))) +
    Math.pow(10, len - 1);

  otpTxt.textContent = otp;
};

let copyOtp = () => {
  let otpVal = otpTxt.textContent;

  navigator.clipboard.writeText(otpVal);

  copyBtn.className = "fas fa-check copy-btn";
  copyBtn.style.color = "green";

  setTimeout(() => {
    copyBtn.className = "far fa-clipboard copy-btn";
    copyBtn.style.color = "#fff";
  }, 1500);
};

copyBtn.addEventListener("click", copyOtp);
generateBtn.addEventListener("click", generateOtp);
generateOtp();











// let generateBtn= document.querySelectorAll(".generate-btn");
// let otpTxtt = document.querySelectorAll(".otp");



// let len=6;



// let generateOtp = () => {
// let otp =Math.floor(Math.random() * (9 * Math.pow(10, len - 1))) + Math.pow(10, len - 1);

//   console.log(otp);
//     };




// generateBtn.addEventListner("click",generateOtp);