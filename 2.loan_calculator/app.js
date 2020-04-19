// Listen for submit
document.querySelector("#loan-form").addEventListener("submit", function (e) {
  // Hode Results
  document.querySelector("#results").classList.add("hidden");
  // Show Loader
  document.querySelector("#loader").classList.remove("hidden");
  setTimeout(calculateResults, 1000);
  e.preventDefault();
});
function calculateResults() {
  // UI vars
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#annualInterest");
  const years = document.querySelector("#repaymentYears");
  const monthlyPayment = document.querySelector("#monthlyPayment");
  const totalPayment = document.querySelector("#totalPayment");
  const totalInterest = document.querySelector("#totalInterest");
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;
  // Compute Monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);
    // Show Results
    document.querySelector("#results").classList.remove("hidden");
  } else {
    showError("Please check your numbers");
  }
  // Hide Loader
  document.querySelector("#loader").classList.add("hidden");
}
// Show Error
function showError(error) {
  // Get Elements
  const card = document.querySelector("#card");
  const heading = document.querySelector("#heading");
  // create a div
  const errorDiv = document.createElement("div");
  errorDiv.className =
    "bg-red-300 text-red-700  py-2 px-4 rounded-md mb-2 text-center ";
  errorDiv.id = "alert";
  // Create text node
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}
// Clear Error
function clearError() {
  document.querySelector("#alert").remove();
}
