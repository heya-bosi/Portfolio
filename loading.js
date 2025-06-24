window.addEventListener("load", () => {
  // すべての画像とサブリソースが読み込まれたときに実行される
  const loadingScreen = document.getElementById("loading-screen");
  const writespace = document.querySelector(".writespace");
  // ローディング画面を消して、コンテンツを表示
  // 1秒待ってから表示
  setTimeout(() => {
    loadingScreen.style.display = "none";
    writespace.style.display = "block";
  }, 1000); // 1000ms = 1秒
});
