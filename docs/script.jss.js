// When YES is clicked
function startParty() {
  // Hide the start div
  document.getElementById("start").classList.add("hidden");

  // Show the party div
  const partyDiv = document.getElementById("party");
  partyDiv.classList.remove("hidden");

  // Start fireworks
  startFireworks();

  // Zoom in the birthday text after 0.5s
  const h1 = partyDiv.querySelector("h1");
  setTimeout(() => {
    h1.classList.add("show-text");
  }, 500);

  // Zoom in the photo after 1s
  const img = partyDiv.querySelector("img");
  setTimeout(() => {
    img.classList.add("show-photo");
  }, 1000);
}

// When NO is clicked
function notYou() {
  alert("😂 Haha nice try! If you are NOT the birthday boy, this place is not for you 😏");
}

// Simple fireworks placeholder (we'll make colorful next)
function startFireworks() {
  const duration = 5 * 1000; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10 };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random
