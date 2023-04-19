// User 1
const user1 = {
  name: "John",
  pin: 1234,
  balance: 1000,
};

// User 2
const user2 = {
  name: "Sarah",
  pin: 5678,
  balance: 5000,
};

// User 3
const user3 = {
  name: "Mike",
  pin: 9012,
  balance: 200,
};

const cancelBtns = document.querySelectorAll(".cancel-btn");
cancelBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    // Clear PIN input field
    document.getElementById("pin").value = "";
    document.getElementById("pin-verification").innerHTML = "";
    document.getElementById("balance-display").innerHTML = "";
    document.getElementById('wrong-bills').innerHTML='';
    document.getElementById('pin-request').innerHTML='Operation canceled ';
    depositForm.style.display = "none";
    withdrawForm.style.display="none";
    
  });
});

//keypad funtionality
function fillInput(num) {
  document.getElementById("pin").value += num;
}

function requestPinJohn() {
  let pinRequest = `Welcome, ${user1.name}! Please enter your 4-digit PIN:`;
  //   let pinCodeJohn = user1.pin
  document.getElementById("pin-request").innerHTML = pinRequest;
}
function requestPinSarah() {
  let pinRequest = `Welcome, ${user2.name}! Please enter your 4-digit PIN:`;
  // let pinCodeSarah = user2.pin
  document.getElementById("pin-request").innerHTML = pinRequest;
}
function requestPinMike() {
  let pinRequest = `Welcome, ${user3.name}! Please enter your 4-digit PIN:`;
  // let pinCodeMike = user3.pin
  document.getElementById("pin-request").innerHTML = pinRequest;
}

function checkPin() {
  const pinInput = document.getElementById("pin").value;

  // Check if pin is exactly 4 digits long
  if (pinInput.length !== 4) {
    const pinVerification = "Invalid pin. Please enter a 4-digit pin.";
    document.getElementById("pin-verification").innerHTML = pinVerification;
    return;
  }
  // check what card is selected and  if the pin is matching clicked card
  if (pinInput == user1.pin && buttonValue == "Button 1 was clicked") {
    let pinVerification = "PIN code verified, Hello John";
    document.getElementById("pin-verification").innerHTML = pinVerification;
    document.getElementById("menu").style.display = "block";
  } else if (pinInput == user2.pin && buttonValue === "Button 2 was clicked") {
    let pinVerification = "PIN code verified, Hello Sarah";
    document.getElementById("pin-verification").innerHTML = pinVerification;
    document.getElementById("menu").style.display = "block";
  } else if (pinInput == user3.pin && buttonValue == "Button 3 was clicked") {
    let pinVerification = " PIN code verified, Hello Mike";
    document.getElementById("pin-verification").innerHTML = pinVerification;
    document.getElementById("menu").style.display = "block";
  } else {
    let pinVerification = "Wrong PIN, Please try again";
    document.getElementById("pin-verification").innerHTML = pinVerification;
    // Clear PIN input field
    document.getElementById("pin").value = "";
    depositForm.style.display = "none";
    withdrawForm.style.display="none";
    // Hide menu
    document.getElementById("menu").style.display = "none";
  }
}

let buttonValue;

const button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  buttonValue = "Button 1 was clicked";
  document.getElementById("menu").style.display = "none";
  // Clear PIN input field
  document.getElementById("pin").value = "";
  document.getElementById("pin-verification").innerHTML = "";
  document.getElementById("balance-display").innerHTML = "";
  document.getElementById('wrong-bills').innerHTML='';
  depositForm.style.display = "none";
  withdrawForm.style.display="none";
});

const button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
  buttonValue = "Button 2 was clicked";
  document.getElementById("menu").style.display = "none";
  // Clear PIN input field
  document.getElementById("pin").value = "";
  document.getElementById("pin-verification").innerHTML = "";
  document.getElementById("balance-display").innerHTML = "";
  document.getElementById('wrong-bills').innerHTML='';
  depositForm.style.display = "none";
  withdrawForm.style.display="none";
});

const button3 = document.querySelector("#button3");
button3.addEventListener("click", () => {
  buttonValue = "Button 3 was clicked";
  document.getElementById("menu").style.display = "none";
  // Clear PIN input field
  document.getElementById("pin").value = "";
  document.getElementById("pin-verification").innerHTML = "";
  document.getElementById("balance-display").innerHTML = "";
  document.getElementById('wrong-bills').innerHTML='';
  depositForm.style.display = "none";
  withdrawForm.style.display="none";
});

function checkBalance() {
  if (buttonValue === "Button 1 was clicked") {
    let balance = user1.balance;
    document.getElementById("balance-display").style.display = "block";
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + balance;
  } else if (buttonValue === "Button 2 was clicked") {
    let balance = user2.balance;
    document.getElementById("balance-display").style.display = "block";
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + balance;
  } else if (buttonValue == "Button 3 was clicked") {
    let balance = user3.balance;
    document.getElementById("balance-display").style.display = "block";
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + balance;
  }
}
//deposit functionality

const depositBtn = document.getElementById("deposit-btn");
const depositForm = document.getElementById("deposit-form");
const backButtonD = document.getElementById("back-btn");

depositBtn.addEventListener("click", () => {
  depositForm.style.display = "block";
  depositBtn.style.display = "none";
  backButtonD.style.display = "inline-block";
});

backButtonD.addEventListener("click", () => {
  depositForm.style.display = "none";
  depositBtn.style.display = "block";
  backButtonD.style.display = "none";
});

const confirmDepositBtn = document.getElementById("confirm-deposit");
confirmDepositBtn.addEventListener("click", () => {
  const depositAmountInput = document.getElementById("deposit-amount");
  const depositAmount = parseInt(depositAmountInput.value);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  if (
    depositAmount % 20 !== 0 &&
    depositAmount % 50 !== 0 &&
    depositAmount % 100 !== 0
  ) {
    document.getElementById('wrong-bills').innerHTML='Deposit amount must be a multiple of <br> 20, 50, or 100.'
    alert("Deposit amount must be a multiple of 20, 50, or 100.");
    return;
  }

  // Get the current user's balance and add the deposit amount
  if (buttonValue === "Button 1 was clicked") {
    user1.balance += depositAmount;
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + user1.balance;
  }

  if (buttonValue === "Button 2 was clicked") {
    user2.balance += depositAmount;
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + user2.balance;
  }

  if (buttonValue === "Button 3 was clicked") {
    user3.balance += depositAmount;
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + user3.balance;
  }
});

//whithdraw functionality
const withdrawBtn = document.getElementById("withdraw-btn");
const withdrawForm = document.getElementById("withdraw-form");
const backButtonW = document.getElementById("back-btnW");

withdrawBtn.addEventListener("click", () => {
  withdrawForm.style.display = "block";
  withdrawBtn.style.display = "none";
  backButtonW.style.display = "inline-block";
});

backButtonW.addEventListener("click", () => {
  withdrawForm.style.display = "none";
  withdrawBtn.style.display = "block";
  backButtonW.style.display = "none";
});

const confirmWithdrawBtn = document.getElementById("confirm-withdraw");
confirmWithdrawBtn.addEventListener("click", () => {
  const withdrawAmountInput = document.getElementById("withdraw-amount");
  const withdrawAmount = parseInt(withdrawAmountInput.value);

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid withdrawal amount.");
    return;
  }

  if (
    withdrawAmount % 20 !== 0 &&
    withdrawAmount % 50 !== 0 &&
    withdrawAmount % 100 !== 0
  ) { alert("Please enter a valid whithdraw amount.");}


  // Get the current user's balance and subtract the withdrawal amount
  if (buttonValue === "Button 1 was clicked") {
    if (withdrawAmount > user1.balance) {
      alert("Insufficient balance.");
      return;
    }
    user1.balance -= withdrawAmount;
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + user1.balance;
  }

  if (buttonValue === "Button 2 was clicked") {
    if (withdrawAmount > user2.balance) {
      alert("Insufficient balance.");
      return;
    }
    user2.balance -= withdrawAmount;
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + user2.balance;
  }

  if (buttonValue === "Button 3 was clicked") {
    if (withdrawAmount > user3.balance) {
      alert("Insufficient balance.");
      return;
    }
    user3.balance -= withdrawAmount;
    document.getElementById("balance-display").innerHTML =
      "Your balance is: " + user3.balance;
  }
});



