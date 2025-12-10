let redCount = 0;
let blueCount = 0;
let yellowCount = 0;

document.getElementById("redBtn").addEventListener("click", () => {
  redCount++;
  document.getElementById("message").innerText =
    "赤ボタンを " + redCount + " 回押しました";
});