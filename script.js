const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
let outputText = document.getElementById("result");

// check if input is a palindrome
checkBtn.addEventListener("click", checkForPalindrome);
inputText.addEventListener("keypress", function handleItem(e) {
    if(e.key === "Enter") {checkForPalindrome();}
});

function checkForPalindrome() {
    let correctInput = inputText.value;
    if (correctInput) {
        printResult();
        inputText.value = "";
    } else {
        alert("Please type in a value");
    }
}

// To print the result
function printResult() {
    let correctInput = inputText.value;
    let refinedInput = correctInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let reversedRefinedInput = [...refinedInput].reverse().join("");
    let hi = `<strong>${correctInput}</strong> ${refinedInput === reversedRefinedInput ? "is" : "is not"} a palindrome.`;
    outputText.innerHTML = hi;
}