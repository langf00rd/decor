function openSide() {
    document.getElementById('side-menu').style.top = "0"
}

function closeSide() {
    document.getElementById('side-menu').style.top = "-1500px"
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 200) {
    document.getElementById("logo-container").style.fontSize = "30px"

    } else {
    document.getElementById("logo-container").style.fontSize = "20px"
    }
  }