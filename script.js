function revealLetter() {
    const letter = document.getElementById("hiddenLetter");
    const envelopeBtn = document.getElementById("envelopeBtn");
    
    if (letter.classList.contains("hidden")) {
        letter.classList.remove("hidden");
        letter.style.display = "block";
        setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transition = "opacity 0.5s ease-in";
        }, 10);
        envelopeBtn.querySelector('p').innerText = "close letter";
    } else {
        letter.classList.add("hidden");
        letter.style.display = "none";
        letter.style.opacity = "0";
        envelopeBtn.querySelector('p').innerText = "click to unwrap your letter...";
    }
}
