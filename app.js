const preBtn = document.getElementById("preBtn");
const nextBtn = document.getElementById("nextBtn");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progressDiv");

let step = 1;

nextBtn.addEventListener("click", () => {
  step += 1;
  update();
});

preBtn.addEventListener("click", () => {
  step -= 1;
  update();
});

const update = () => {
  const widthValue = ((step - 1) / (circles.length - 1)) * 100;
  circles.forEach((circle, index) => {
    if (index < step) {
      circle.classList.add("active");
      progress.style.width = `${widthValue}%`;
    } else {
      circle.classList.remove("active");
    }
  });

  if (step === 1) {
    preBtn.disabled = true;
  } else if (step === circles.length) {
    nextBtn.disabled = true;
  } else {
    preBtn.disabled = false;
    nextBtn.disabled = false;
  }
};
