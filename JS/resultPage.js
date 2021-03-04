const btnOpen = document.querySelector(".btn-sub");
const btnClose = document.querySelector(".fa-times-circle");
const informationResult = document.querySelector(".inf-conatiner");

const maleInput = document.querySelector("#male");
const femaleInput = document.querySelector("#female");
const ageInput = document.querySelector("#age");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const selectActive = document.querySelector(".physical-activity");

const bmiText = document.querySelector(".bmi-text");
const bmrText = document.querySelector(".bmr-text");
const weightText = document.querySelector(".weight-text");
const resultText = document.querySelector(".result-text");

const answer = [
  "Ops, I'm a bit disappointed but I believe in you. You have to work on your meals. Try to eat a little more, especially carbohydrates and protein and drink plenty of water about 2.5 liters per day.",
  "It looks great, congratulations. You definitely need to feel very healthy, but don't forget to drink at least 2 liters of water a day. I wish you all the best and keep it up.",
  "Uhh, there's something wrong with your weight. You have to change it as soon as possible, otherwise your wife will throw you out of the house. Exercise more and stick to your diet.",
];

// EXERCISE
const howManyTraining = document.querySelector(".how-many-training");
const thisOurExercise = document.querySelectorAll(".example-exercises");

const gymExes = [
  "T-Bar Row",
  "30-Degree Lat Pulldown",
  "Pullups",
  "Farmer’s Walk",
  "Standing Barbell Curl",
  "Dips",
  "Diamond Pushups",
  "Shrugs",
  "Dumbbell Lateral Raises",
  "Barbell Bench Press",
  "Cable Crossover",
  "Incline Flye",
  "Squat",
  "Leg Curl",
  "Leg Extension",
  "Bulgarian Split Squat",
  "Calf Raise",
  "Barbell Ab Rollout",
  "Weighted Decline Situp",
  "Jackknife Situp",
];

//
btnOpen.addEventListener("click", function () {
  if (!ageInput.value.length)
    document.querySelector(".text-01").textContent = "Write the right number";
  else document.querySelector(".text-01").textContent = "";
  if (!weightInput.value.length)
    document.querySelector(".text-02").textContent = "Write the right number";
  else document.querySelector(".text-02").textContent = "";
  if (!heightInput.value.length)
    document.querySelector(".text-03").textContent = "Write the right number";
  else document.querySelector(".text-03").textContent = "";

  if (
    (maleInput.checked || femaleInput.checked) &&
    ageInput.value.length &&
    weightInput.value.length &&
    heightInput.value.length
  ) {
    informationResult.classList.add("information-result");
    document.body.style.overflow = "hidden";

    let age = ageInput.value;
    let weight = weightInput.value;
    let height = heightInput.value;
    // console.log(weight);

    // BMI
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    bmiText.textContent = `${bmi}`;

    //Result text
    if (bmi < 18) {
      resultText.textContent = answer[0];
      howManyTraining.textContent = "2-3";
    } else if (bmi > 28) {
      resultText.textContent = answer[2];
      howManyTraining.textContent = "1-3";
    } else {
      resultText.textContent = answer[1];
      howManyTraining.textContent = "3-4";
    }

    // BMR && BEST WEIGHT FOR U
    let selectOption = selectActive.selectedIndex;
    if (maleInput.checked) {
      let bmr = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 161);

      if (selectOption === 2) bmrText.textContent = `${bmr + 400} cal / day`;
      else if (selectOption === 3)
        bmrText.textContent = `${bmr + 750} cal / day`;
      else if (selectOption === 4)
        bmrText.textContent = `${bmr + 1000} cal / day`;
      else bmrText.textContent = `${bmr} cal / day`;

      let bestW = Math.round((height - 100) * 0.9);
      weightText.textContent = `${bestW - 3} - ${bestW + 6} kg`;
    }
    if (femaleInput.checked) {
      let bmr = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161);

      if (selectOption === 2) bmrText.textContent = `${bmr + 250} cal / day`;
      else if (selectOption === 3)
        bmrText.textContent = `${bmr + 500} cal / day`;
      else if (selectOption === 4)
        bmrText.textContent = `${bmr + 700} cal / day`;
      else bmrText.textContent = `${bmr} cal / day`;

      let bestW = Math.round((height - 100) * 0.85);
      weightText.textContent = `${bestW - 7} - ${bestW} kg`;
    }
  }
});
btnClose.addEventListener("click", function () {
  informationResult.classList.remove("information-result");
  document.body.style.overflow = "visible";
});

//
window.addEventListener("DOMContentLoaded", function () {
  // EXERCISE
  const series = document.querySelectorAll(".series");
  const repeatExe = document.querySelectorAll(".repeat-exe");
  const nameOfExe = document.querySelectorAll(".name-of-exe");

  thisOurExercise.forEach(function () {
    series.forEach(function (e) {
      e.textContent = `${Math.floor(Math.random() * (5 - 2 + 1) + 2)}`;
    });
    repeatExe.forEach(function (el) {
      el.textContent = `${Math.floor(Math.random() * (15 - 7 + 1) + 7)}`;
    });
    nameOfExe.forEach(function (ele) {
      ele.innerHTML = `${gymExes[randomOne()]}`;
    });
  });
});
function randomOne() {
  let max = gymExes.length;
  let randomNum = 0;
  let prevNum = randomNum;

  do {
    randomNum = Math.floor(Math.random() * max);
  } while (prevNum === randomNum);

  return randomNum;
}

// switching between info and training plan
const chevronUp = document.querySelector(".fa-hand-point-up");
const showTheFirst = document.querySelector(".health-parameters");

const chevronDown = document.querySelector(".fa-hand-point-down");
const showTheSecond = document.querySelector(".training-parameters");

chevronUp.addEventListener("click", function () {
  showTheFirst.style.display = "none";
  showTheSecond.style.display = "flex";
});

chevronDown.addEventListener("click", () => {
  showTheFirst.style.display = "flex";
  showTheSecond.style.display = "none";
});
