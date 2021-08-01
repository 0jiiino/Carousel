const $arrowButton = document.querySelectorAll(".button");
const $circle = document.querySelectorAll(".dot");
const blackCircle = "images/black-circle.png";
const emptyCircle = "images/empty-circle.png";
let $mainImg = document.querySelector(".mainImage");

function onClickDot(event) {
  $mainImg.src = "images/image-" + event.target.dataset.index + ".png";
  for(let i = 0; i < 5; i++) {
    if($circle[i].src.includes(blackCircle)) {
      $circle[i].src = emptyCircle;
      break;
    }
  }
  $circle[event.target.dataset.index].src = blackCircle;
}

function onClickLeftButton(Array) {
  if(Array[0].src.includes(blackCircle)) {
    Array[0].src = emptyCircle;
    Array[4].src = blackCircle;
    $mainImg.src = "images/image-4.png";
  } else {
    for(let i = 1; i < $circle.length; i++) {
      if(Array[i].src.includes(blackCircle)) {
        Array[i].src = emptyCircle;
        Array[i-1].src = blackCircle;
        $mainImg.src = "images/image-" + (i-1) + ".png";
      }
    }
  }
}

function onClickRightButton(Array) {
  if(Array[4].src.includes(blackCircle)) {
    Array[4].src = emptyCircle;
    Array[0].src = blackCircle;
    $mainImg.src = "images/image-0.png";
  } else {
    for(let i = 0; i < $circle.length-1; i++) {
      if(Array[i].src.includes(blackCircle)) {
        Array[i].src = emptyCircle;
        Array[i+1].src = blackCircle;
        $mainImg.src = "images/image-" + (i+1) + ".png";
        break;
      }
    }
  }
}

$arrowButton[0].addEventListener("click", function() {
  onClickLeftButton($circle);
});

$arrowButton[1].addEventListener("click", function() {
  onClickRightButton($circle);
});

for(let i = 0; i < 5; i++) {
  $circle[i].addEventListener("click", onClickDot);
}
