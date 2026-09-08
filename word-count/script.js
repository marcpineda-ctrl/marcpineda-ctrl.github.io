// word-count/script.js

function countWords(paragraph) {
  const modifiedParagraph = paragraph
    .replaceAll(".", "")
    .replaceAll(",", "")
    .toLowerCase();
  const words = modifiedParagraph.split(" ");

  const wordCounts = {};

  words.forEach((word) => {
    if (!wordCounts[word]) {
      wordCounts[word] = 1;
    } else {
      wordCounts[word]++;
    }
  });

  const wordCountsArr = Object.entries(wordCounts);
  wordCountsArr.sort((a, b) => b[1] - a[1]);

  return wordCountsArr;
}

// Only run DOM code if we are in a browser not in Jest
if (typeof document !== "undefined" && document.getElementById("countBtn")) {
  const countBtn = document.getElementById("countBtn");
  const input = document.getElementById("input");
  const tableBody = document.getElementById("tableBody");
  const resultsTable = document.getElementById("results");

  countBtn.addEventListener("click", () => {
    const paragraph = input.value.trim();
    if (!paragraph) {
      alert("Please enter some text first!");
      return;
    }
    const results = countWords(paragraph);
    tableBody.innerHTML = "";
    results.forEach((entry, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${entry[0]}</td>
        <td>${entry[1]}</td>
      `;
      tableBody.appendChild(row);
    });
    resultsTable.style.display = "table";
  });
}

if (typeof module !== "undefined") {
  module.exports = { countWords };
}