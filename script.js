function goTo(target) {
  if (target == "story") {
    console.log("story");
    document.getElementById("fadeToBlack").className = "activeFade";
    setInterval(function() {
      window.location = "file:///Users/dangond/Desktop/story.html";
    }, 3500);
  }
  if (target == "sound") {
    console.log("sound");
    document.getElementById("fadeToBlack").className = "activeFade";
    setInterval(function() {
      window.location = "file:///Users/dangond/Desktop/sound.html";
    }, 3500);
  }
}
