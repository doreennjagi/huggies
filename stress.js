function giveHug() {
    // Display hug animation (teddy bear image)
    var hugAnimation = document.getElementById("hugAnimation");
    hugAnimation.style.display = "block";

    // Trigger hug animation on the teddy bear image
    setTimeout(function() {
        var teddyBear = document.getElementById("teddyBear");
        teddyBear.style.animation = "hugAnimation 1s ease";
    }, 100);

    // Hide hug animation (teddy bear image) after completion
    setTimeout(function() {
        hugAnimation.style.display = "none";
    }, 1100);
}
