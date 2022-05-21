function subscribe() {
  let name = prompt("What is your name?");
  let age = prompt("What is your age?");

  if (age >= 15) {
    alert("Thanks for subcribing, " + name + ". Have a wonderful day!");
  } else {
    alert("Thanks for subcribing, " + name + ". We will be in touch!");
  }
}

let subscribeButton = document.querySelector("button");
contactButton.addEventListener("click", subscribe);
