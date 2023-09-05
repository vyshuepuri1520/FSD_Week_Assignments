const quoteContainer = document.querySelector(".quote");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];

      quoteContainer.innerHTML = `<p>${randomQuote.text}</p><p class="author">- ${randomQuote.author || "Unknown"}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching and displaying the quote:", error);
      quoteContainer.innerHTML = "<p>Failed to fetch a quote. Please try again later.</p>";
    });
}

newQuoteBtn.addEventListener("click", getRandomQuote);

getRandomQuote();