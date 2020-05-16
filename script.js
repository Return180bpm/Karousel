(function () {
    var kitties = document.querySelectorAll(".carousel img");
    var dots = document.getElementsByClassName("dot");
    var whichVisible = 0;

    var myTimeOut;

    // function () {
    //     return counter % kitties.length;
    // };

    dots[whichVisible].classList.add("dot-active");

    ///////////////////////counter++;

    function makeVisible(which) {
        if (which > kitties.length - 1) {
            which = 0;
        }
        if (which < 0) {
            which = kitties.length - 1;
        }
        if (which != whichVisible) {
            console.log("which", which);
            clearTimeout(myTimeOut);

            if (kitties[which].classList.contains("offscreen")) {
                kitties[which].classList.remove("offscreen");
            }

            dots[whichVisible].classList.remove("dot-active");
            kitties[whichVisible].classList.remove("onscreen");
            kitties[whichVisible].classList.add("offscreen");

            // console.log(which);

            dots[which].classList.add("dot-active");
            kitties[which].classList.add("onscreen");

            // console.log(kitties[which].classList);
            whichVisible = which;
        }
        myTimeOut = setTimeout(function () {
            makeVisible(++which);
        }, 1500);
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.className === "offscreen") {
            e.target.classList.remove("offscreen");
        }
    });

    document.getElementsByClassName("tester")[0].textContent = "hello";

    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        dot.addEventListener("click", function (e) {
            makeVisible(i);
        });
        // console.log(dot);
    }

    // document.body.addEventListener("click", makeVisible);

    myTimeOut = setTimeout(function () {
        makeVisible(1);
    }, 1500);
    // setInterval(makeVisible, 1500);

    var touchStartX;
    var touchEndX;

    document.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].clientX;
        console.log(touchStartX);
    });

    document.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;

        if (Math.abs(touchStartX - touchEndX) > 10) {
            if (touchStartX > touchEndX) {
                makeVisible(whichVisible - 1);
            } else {
                makeVisible(whichVisible + 1);
            }
            // console.log(touchEndX);
        }
    });
    // console.log(kitties);
})();

// use setTimeout

// dot[which].click = makevisible(which)
