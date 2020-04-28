window.addEventListener("load", () => {
    var sounds = document.querySelectorAll(".sound");
    var keys = document.querySelectorAll(".keys div");
    var animation = document.querySelector(".animation");
    var colors = ["#ffbe76", "#ff7979", "#badc58", "#7ed6df", "#e056fd", "#686de0", "#30336b", "#95afc0", "#22a6b3", "#e84118", "#7f8fa6", "#6F1E51"]
    



    keys.forEach((key, index) => {
        key.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createCircle(index);
        });
    });


    var createCircle = index => {
        var circle = document.createElement("div");
        animation.appendChild(circle);
        circle.style.backgroundColor = colors[index];
        circle.style.animation = `jump 1s ease`;
        circle.addEventListener("animationend", function() {
          animation.removeChild(this);
        });
      };
});