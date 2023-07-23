const kits = [
  "A.Singh",
  "AR.Rahman",
  "KK",
  "S.Mahadevan",
  "S.Nigam",
  "S.Goshal",
  "J.Nautiyal",
  "S.Chauhan",
];

const containerel = document.querySelector(".container");
let activeAudio = null;

kits.forEach((kits) => {
  const btnel = document.createElement("button");
  btnel.classList.add("singer");
  btnel.innerText = kits;
  btnel.style.backgroundImage = "url(img/" + kits + ".jpg)";
  containerel.appendChild(btnel);
  const audioel = document.createElement("audio");
  audioel.src = "audio/" + kits + ".mp3";
  containerel.appendChild(audioel);
  btnel.addEventListener("click", () => {
    if (activeAudio) {
      activeAudio.pause();
    }
    audioel.play();
    activeAudio = audioel;
  });
});
