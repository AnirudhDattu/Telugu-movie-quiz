document.addEventListener("DOMContentLoaded", function () {
    displayResults();
});

function displayResults() {
    const results = JSON.parse(localStorage.getItem("quizResults")) || [];
    const resultContainer = document.getElementById("result-container");
    
    if (results.length === 0) {
        resultContainer.innerHTML = "<p>No results to display.</p>";
        return;
    }
    
    let resultHtml = "<ul>";
    results.forEach((result) => {
        resultHtml += `<li>${result.userName} - Score: ${result.score}/${questions.length} (${result.percentage}%) - Date: ${result.date}</li>`;
    });
    resultHtml += "</ul>";
    
    resultContainer.innerHTML = resultHtml;
}
