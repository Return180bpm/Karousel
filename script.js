(function () {
    var kitties = document.querySelectorAll(".carousel img");
    var dots = document.getElementsByClassName("dot");
    var counter = 0;
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
        if (which != whichVisible) {
            clearTimeout(myTimeOut);

            if (kitties[which].classList.contains("offscreen")) {
                kitties[which].classList.remove("offscreen");
            }

            dots[whichVisible].classList.remove("dot-active");
            kitties[whichVisible].classList.remove("onscreen");
            kitties[whichVisible].classList.add("offscreen");

            console.log(which);

            dots[which].classList.add("dot-active");
            kitties[which].classList.add("onscreen");

            console.log(kitties[which].classList);
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

    document.addEventListener("touchstart", function (event) {
        // console.log(event);
    });
    // console.log(kitties);
})();

// use setTimeout

// dot[which].click = makevisible(which)
