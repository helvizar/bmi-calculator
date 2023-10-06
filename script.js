// Menyimpan elemen-elemen HTML
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate");
const bmiValue = document.getElementById("bmi-value");

// Tekan 'Enter' untuk submit
weightInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculateBMI();
  }
});

heightInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculateBMI();
  }
});

// Fungsi untuk menghitung BMI
function calculateBMI() {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value) / 100; // Konversi tinggi ke meter

  console.log(weight, height);

  // Validasi input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height.");
    return;
  }

  const bmi = weight / (height * height);

  // console.log(bmi);

  // Format 1 angka desimal
  const formattedBMI = Math.round(bmi * 10) / 10;

  // Kategori BMI
  let category = "";
  if (formattedBMI < 18.5) {
    category = "Underweight";
  } else if (formattedBMI >= 18.5 && formattedBMI <= 24.9) {
    category = "Normal";
  } else if (formattedBMI >= 25 && formattedBMI <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  bmiValue.innerHTML = `Your BMI is <strong>${formattedBMI}</strong> which means You are <strong>${category}</strong>`;
};

calculateButton.addEventListener("click", calculateBMI);
