//! QUESTION 01

function alertOnClick() {
  alert("You Clicked The Link!");
}

//! QUESTION 02

function mobilePurchased() {
  alert("Thanks for purcahsing a phone from us");
}

//! QUESTION 03

function deleteRow(btn) {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//! QUESTION 05

i = 0;

function increment() {
  i++;
  document.getElementById("numbering").innerHTML = i;
}

function decrement() {
  i--;
  document.getElementById("numbering").innerHTML = i;
}
