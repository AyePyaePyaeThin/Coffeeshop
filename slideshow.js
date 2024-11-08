document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 2000; 

    images[0] = "coffeeimage/slideshow1.jpg";
    images[1] = "coffeeimage/slideshow2.jpg";
    images[2] =  "coffeeimage/slideshow3.webp";
    function changeImg() {
        var slideElement = document.getElementById("coffee");
        console.log(slideElement); 

        slideElement.src = images[i]; 

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    changeImg();
});