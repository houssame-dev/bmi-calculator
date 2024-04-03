document.getElementById("btn-submit").addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = weight / (height * height);
  let bmiValue = document.getElementById("bmi-value");
  bmiValue.innerHTML = bmi;
  let status = document.getElementById("status");
  let risk = document.getElementById("risk");
  let emoji = document.getElementById("emoji");
  switch (true) {
    case bmi < 18.5:
      status.innerHTML = "Underweight";
      risk.innerHTML = "Minimal";
      status.style.color = "skyblue";
      risk.style.color = "skyblue";
      emoji.innerHTML = "&#128512;";
      break;
    case bmi > 18.5 && bmi < 24.9:
      status.innerHTML = "Normal";
      risk.innerHTML = "Minimal";
      status.style.color = "wheat";
      risk.style.color = "wheat";
      emoji.innerHTML = "&#128513;";
      break;
    case bmi > 25 && bmi < 29.9:
      status.innerHTML = "Overweight";
      risk.innerHTML = "Increased";
      status.style.color = "yellow";
      risk.style.color = "yellow";
      emoji.innerHTML = "&#128527;";
      break;
    case bmi > 30 && bmi < 34.9:
      status.innerHTML = "Obese";
      risk.innerHTML = "Hight";
      status.style.color = "red";
      risk.style.color = "red";
      emoji.innerHTML = "&#128532;";
      break;
    case bmi > 35 && bmi < 39.9:
      status.innerHTML = "Severely Obese";
      risk.innerHTML = "Very Hight";
      status.style.color = "red";
      risk.style.color = "red";
      emoji.innerHTML = "&#128542;";
      break;
    case bmi > 40:
      status.innerHTML = "Morbidly Obese";
      risk.innerHTML = "Extremely Hight";
      status.style.color = "red";
      risk.style.color = "red";
      emoji.innerHTML = "&#128543;";
      break;
  }
});
