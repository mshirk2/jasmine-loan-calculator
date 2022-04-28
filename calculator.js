window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const values = {
    amount: 1000,
    years: 3,
    rate: 5,
  }
  const amountDefault = document.getElementById("loan-amount");
  const yearsDefault = document.getElementById("loan-years");
  const rateDefault = document.getElementById("loan-rate");
  amountDefault.value = values.amount;
  yearsDefault.value = values.years;
  rateDefault.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const months = values.years * 12;
  if (values.rate === 0){
    return (values.amount/12).toFixed(2);
  }
  else {
    return ((monthlyRate * values.amount)/ (1- Math.pow((1 +monthlyRate), -months))).toFixed(2);
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  payment.innerText = "$" + monthly;
}
