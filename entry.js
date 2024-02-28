const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



function changeWidth() {
    var scroll = (document.getElementById("page").scrollTop * 2);
    var width = scroll;
    // var width = Math.min(100 - scroll);

    document.getElementById("logo").style.width = width + "px";
}

document.getElementById("page").addEventListener('scroll', function(){
    requestAnimationFrame(changeWidth);
  })