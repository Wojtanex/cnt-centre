let mining = false;
let hashrate = 0;

document.getElementById("start-mining").addEventListener("click", () => {
  mining = !mining;
  if (mining) {
    startMining();
    document.getElementById("start-mining").innerText = "Stop Mining";
  } else {
    stopMining();
    document.getElementById("start-mining").innerText = "Start Mining";
  }
});

function startMining() {
  const startTime = Date.now();
  let hashCount = 0;

  function mine() {
    if (!mining) return;

    // Prosta funkcja hashująca
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(hashCount.toString())).then(() => {
      hashCount++;
      const elapsedTime = (Date.now() - startTime) / 1000;
      hashrate = Math.round(hashCount / elapsedTime);
      document.getElementById("current-hashrate").innerText = hashrate;
      requestAnimationFrame(mine);
    });
  }

  mine();
}

function stopMining() {
  mining = false;
}

