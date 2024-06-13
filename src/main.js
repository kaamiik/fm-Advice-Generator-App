const id = document.querySelector(".advice-id");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".button");

async function fetchAdvice() {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
    );
    const json = await response.json();

    id.textContent = json.slip.id;
    quote.textContent = json.slip.advice;
  } catch (error) {
    id.textContent = "";
    quote.textContent = "Failed to fetch advice";
    console.error("Error fetching advice: ", error);
  }
}

btn.addEventListener("click", fetchAdvice);

window.addEventListener("load", fetchAdvice);
