function jumpToTime(time) {
  var audio = document.getElementById("MyPod");
  audio.currentTime = time;
  audio.play();
}
