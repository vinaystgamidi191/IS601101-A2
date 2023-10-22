function reverseString() {
    const inputText = document.getElementById("inputText").value;
    const reversedString = inputText.split('').reverse().join('');
    document.getElementById("outputText").textContent = `Reversed: ${reversedString}`;
}

function checkPalindrome() {
    const inputNumbers = document.getElementById("inputNumbers").value;
    const strippedInput = inputNumbers.replace(/\D/g, ""); // Remove non-numeric characters
    const reversedInput = strippedInput.split('').reverse().join('');

    if (inputNumbers === reversedInput) {
        document.getElementById("outputText1").textContent = "It's a palindrome!";
    } else {
        document.getElementById("outputText1").textContent = "It's not a palindrome.";
    }
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for both fields.");
    } else {
        const tipAmount = (tipPercentage / 100) * subtotal;
        const totalAmount = subtotal + tipAmount;
        document.getElementById("outputText2").textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }
}
