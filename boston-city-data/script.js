function renderPost(post, postsContainer) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("earner");
  postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <h3>${post.department}</h3>
    <h4>$${post.earnings}</h4>
  `;
  postsContainer.appendChild(postDiv);
}

fetch("https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const records = data.data;

    // Hide loading message
    document.getElementById("loading").style.display = "none";

    // Sort by total earnings (index 18) highest first
    const top5 = records
      .sort((a, b) => parseFloat(b[18]) - parseFloat(a[18]))
      .slice(0, 5);

    const container = document.getElementById("earners");

    top5.forEach((record) => {
      const li = document.createElement("li");
      li.classList.add("earner");
      li.innerHTML = `
        <h2>${record[8]}</h2>
        <h3>${record[9]}</h3>
        <h4>$${parseFloat(record[18]).toLocaleString()}</h4>
      `;
      container.appendChild(li);
    });
  })
  .catch((error) => {
    document.getElementById("loading").textContent = "Failed to load data.";
    console.error("Error:", error.message);
  });

if (typeof module !== "undefined") {
  module.exports = { renderPost };
}