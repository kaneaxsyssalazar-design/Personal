let attempts = 0;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

// Select the main container so we can replace only its inside content
const mainContainer = document.querySelector(".main");

// 1. Create the audio object pointing to your music file
const birthdaySong = new Audio('videoplayback.m4a');

const texts = [
  "Why are you like this? 😭",
  "Stop playing 💔",
  "You know you want to say yes 😏",
  "I'm begging you now 🥺",
  "I'm not going to stop until you say YES 😌",
  "Last chance!",
  "Come ooooon 😩",
  "Just one little yes 🥺👉👈",
  "NO is not an option anymore 😌",
];

noBtn.addEventListener("mouseover", () => {
  attempts++;

  // Update text
  question.textContent = texts[Math.min(attempts - 1, texts.length - 1)];

  // Move button randomly and scale it (avoid overlapping YES button, constrained for mobile)
  const x =
    Math.random() > 0.5 ? Math.random() * 80 + 50 : -(Math.random() * 80 + 50);
  const y =
    Math.random() > 0.5 ? Math.random() * 80 + 50 : -(Math.random() * 80 + 50);
  const noScale = Math.max(0.3, 1 - attempts * 0.15);
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;

  // Grow YES and ensure it stays on top
  const yesScale = 1 + attempts * 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.zIndex = "10";

  // make NO disappear
  if (attempts >= texts.length) {
    noBtn.style.display = "none";
    noBtn.style.pointerEvents = "none";
    question.textContent = "Okay okay 😌 Just press YES ❤️";
  }
});

// 2. Play the music and show the styled message box when YES is clicked
yesBtn.addEventListener("click", () => {
  // Reset and play the song
  birthdaySong.currentTime = 0;
  birthdaySong.play().catch(error => {
    console.error("Audio playback failed:", error);
  });

  // Replace ONLY the inner content of the main container (keeps the background GIF!)
  mainContainer.innerHTML = `
    <style>
      .birthday-container {
        text-align: center;
        animation: fadeInScale 0.8s ease-out forwards;
        max-width: 450px;
        width: 90%;
        margin: 0 auto;
        padding: 20px;
      }

      .birthday-container h1 {
        color: #ff4d6d;
        font-size: 2.5rem;
        margin-bottom: 5px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      }

      .subtitle {
        color: #ff758f;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 25px;
      }

      .message-box {
        background: rgba(255, 255, 255, 0.95); /* Semi-transparent so background GIF subtly peeks through */
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(255, 77, 109, 0.25);
        border: 3px solid #ffb3c1;
        position: relative;
        text-align: left;
        line-height: 1.6;
        color: #4a4a4a;
        transform: rotate(-1deg);
        transition: transform 0.3s ease;
      }

      .message-box:hover {
        transform: rotate(0deg) scale(1.02);
      }

      .message-box p {
        margin-bottom: 15px;
        font-size: 1.05rem;
      }

      .message-box .letter-header {
        font-weight: bold;
        color: #ff4d6d;
        font-size: 1.2rem;
      }

      .message-box .signature {
        text-align: right;
        font-style: italic;
        font-weight: bold;
        color: #ff4d6d;
        margin-top: 20px;
        font-size: 1.1rem;
      }

      .heart-decorator {
        position: absolute;
        top: -15px;
        right: 20px;
        font-size: 2rem;
        animation: float 2s ease-in-out infinite alternate;
      }

      @keyframes fadeInScale {
        0% {
          opacity: 0;
          transform: scale(0.8);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes float {
        0% { transform: translateY(0); }
        100% { transform: translateY(-8px); }
      }
    </style>

    <div class="birthday-container">
      <h1>Yayyyy 🥰💖</h1>
      <p class="subtitle">You are officially my Birthday Girl 😍</p>
      
      <div class="message-box">
        <div class="heart-decorator">💝</div>
        <p class="letter-header">Dear Bossing ko,</p>
        <p>
          I hope your special day is absolutely packed with as much laughter, joy, 
          and sweet surprises as you bring into my world every single day. 
        </p>
        <p>
          Thank you for just being you. I know we just knew each other for just a month but I do want to make more memories with you. Let's celebrate the wonderful person you are! 🥳✨
        </p>
        <p class="signature">With love & hugs, Kane ❤️</p>
      </div>
    </div>
  `;
});

console.log(texts.length);

// for mobile devices where hover is not possible
noBtn.addEventListener("touchstart", () => {
  attempts++;

  // Update text
  question.textContent = texts[Math.min(attempts - 1, texts.length - 1)];

  // Move button randomly and scale it (avoid overlapping YES button, constrained for mobile)
  const x =
    Math.random() > 0.5 ? Math.random() * 80 + 50 : -(Math.random() * 80 + 50);
  const y =
    Math.random() > 0.5 ? Math.random() * 80 + 50 : -(Math.random() * 80 + 50);
  const noScale = Math.max(0.3, 1 - attempts * 0.15);
  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;

  // Grow YES and ensure it stays on top
  const yesScale = 1 + attempts * 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.zIndex = "10";

  // Optional: make NO disappear
  if (attempts >= texts.length) {
    noBtn.style.display = "none";
    noBtn.style.pointerEvents = "none";
    question.textContent = "Okay okay 😌 Just press YES ❤️";
  }
});