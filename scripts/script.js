// Part 1: Basics - Variables, Conditionals

function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = "";

  if (age >= 18) {
    result = "You are an adult!";
  } else if (age > 0) {
    result = "You are still a minor!";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = result;
}

// Part 2: Functions

function addNumbers(a, b) {
  return a + b;
}

function showSum() {
  let n1 = parseInt(document.getElementById("num1").value);
  let n2 = parseInt(document.getElementById("num2").value);

  let sum = addNumbers(n1, n2);
  document.getElementById("sumResult").innerText = "The sum is: " + sum;
}

// Part 3: Loops

function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old items

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }

  let li = document.createElement("li");
  li.innerText = "Go!";
  list.appendChild(li);
}

// Part 4: DOM Manipulation

// Example 1: Toggle a class on click
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Add items dynamically
function addListItem() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.innerText = "New item " + (ul.children.length + 1);
  ul.appendChild(li);
}

// Example 3: Change text dynamically
document.getElementById("toggleText").addEventListener("mouseover", function () {
  this.innerText = "You hovered over me!";
});
document.getElementById("toggleText").addEventListener("mouseout", function () {
  this.innerText = "Click the button to highlight me!";
});
