const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
      randomString = length => Array.from(Array(length)).map(randomChar).join("");

const card = document.querySelector(".card"),
      letters = card.querySelector(".card-letters");
const logo = document.getElementById("logo");
const mainpage = document.querySelector(".main-page");

const handleOnMove = e => {
  let rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

  letters.style.setProperty("--x", `${x}px`);
  letters.style.setProperty("--y", `${y}px`);
  
  letters.innerText = randomString(10100);
}

document.onmousemove = e => handleOnMove(e);


document.ontouchmove = e => handleOnMove(e.touches[0]);

function shake(){
    document.body.classList.add('shake');
    setTimeout(function() {
        document.body.classList.remove('shake');
    }, 500);
}