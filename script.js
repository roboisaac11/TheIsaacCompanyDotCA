var mainElement = document.getElementById("main");
var notifications = document.getElementById("notifications")
var titleBackground = document.getElementById("titleBackground");

var currentcolor = [0, 149, 255]
let nextcolor = [0, 149, 255]

mainElement.addEventListener("scroll", (event) => {
  console.log("scrolled")
  var progressBar = document.querySelector(".progress-bar");
  var progress = (mainElement.scrollTop / (mainElement.scrollHeight - mainElement.clientHeight)) * 100;
  progressBar.style.width = progress + "%";
  progressBar["aria-valuenow"] = progress;
});


let down = true

window.onscroll = function(e) {

  nextcolor = currentcolor.slice()
  // console.log(nextcolor)

  // if (down) {
  //   nextcolor[1] += document.documentElement.scrollTop / 100
  //   if (nextcolor[1] >= 255) {
  //     down = false
  //   }
  // } else {
  //   nextcolor[1] -= document.documentElement.scrollTop / 100
  //   if (nextcolor[1] <= 0) {
  //     down = true
  //   }
  // }

  // titleBackground.setAttribute("fill", "rgb(" + nextcolor.join(", ") + ")")

  var progressBar = document.querySelector(".progress-bar");

  if (document.documentElement.scrollTop == 0) {
    var progress = (document.documentElement.scrollTop / (document.documentElement.scrollHeight)) * 100;
  }
  else {
    var progress = ((document.documentElement.scrollTop + window.screen.height) / (document.documentElement.scrollHeight)) * 100;
  }
  progressBar.style.width = progress + "%";
  progressBar["aria-valuenow"] = progress;

  // nextcolor[1] = 255 * (progress / 50) + 149
  // //nextcolor[1] += currentcolor[1]

  // titleBackground.setAttribute("fill", "rgb(" + nextcolor.join(", ") + ")")


}

function notify(title, message, time) {
  fetch("notification.html")
    .then((res) => res.text())
    .then((text) => {
      text = text.replace("TITLE", title)
      text = text.replace("MESSAGE", message)
      text = text.replace("TIME", time)

      notifications.innerHTML += text;

      if (!document.getElementById("mutenotify").checked) {

        let bling = new Audio("notification.mp3")
        bling.play()
      }

    })
    .catch((e) => console.error(e));
}