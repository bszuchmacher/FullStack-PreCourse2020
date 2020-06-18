const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const maps = document.querySelectorAll(".map");
let indexMap = 0;

function switchMapCity() {
    if (prevButton != null) { 
      prevButton.addEventListener("click", function () {
        maps[indexMap].classList.remove("active");
        indexMap--;
        maps[indexMap].classList.add("active");
        nextButton.disabled = false;

        if (indexMap === 0) {
          prevButton.disabled = true;
        }  
      }) 
    }
    if (nextButton != null) { 
      nextButton.addEventListener("click", function() {
        maps[indexMap].classList.remove("active");
        indexMap++;
        maps[indexMap].classList.add("active");
        prevButton.disabled = false;

        if (maps.length === indexMap + 1) {
          nextButton.disabled = true;
        }
      })
    }
}

switchMapCity()
