var stickything = null;


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.id=="no-more-stick"){
                stickything = document.getElementById("page").scrollTop
                document.getElementsByClassName("sticky")[0].classList.add("hidden")
                document.getElementsByClassName("sticky")[0].classList.remove("nothidden")

                document.getElementsByClassName("card-track")[0].classList.add("hidden")


            }
        }
        else{
            entry.target.classList.remove('show');
            document.getElementsByClassName("sticky")[0].classList.add("sticky");
            if (stickything != null && document.getElementById("page").scrollTop <= stickything){
                document.getElementsByClassName("card-track")[0].classList.remove("hidden")
                document.getElementsByClassName("sticky")[0].classList.remove("hidden")
                document.getElementsByClassName("sticky")[0].classList.add("nothidden")
            }
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
    document.getElementsByClassName("title")[0].style.opacity = 1 - (width / 2000)
}

document.getElementById("page").addEventListener('scroll', function(){
    requestAnimationFrame(changeWidth);
  })