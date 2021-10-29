//peso/altura²

function calculate() {
  const weight = document.getElementById('weight').value
  const height = document.getElementById('height').value
  const result = document.getElementById('results')
  // result.className = 'active'
  result.classList.add('active')

  if (weight !== '' && height !== '') {
    const bmi = (weight / height ** 2).toFixed(1)
    console.log(bmi)

    let classification

    if (bmi < 18.5) {
      classification = 'underweight'
      results.style.background = '#b1d6d6'
    } else if (bmi <= 24.9) {
      classification = 'Healthy Weight'
      results.style.background = '#9ee559'
    } else if (bmi <= 29.9) {
      classification = 'Overweight'
      results.style.background = '#fffda6'
    } else if (bmi <= 34.9) {
      classification = 'Obesity Class I'
      results.style.background = '#ffd900'
    } else if (bmi <= 39.9) {
      classification = 'Obesity Class II'
      results.style.background = '#f68d32'
    } else {
      classification = 'Severe Obesity'
      results.style.background = '#f17983'
    }

    result.innerHTML = `<strong>Your BMI is ${bmi}</strong> <br> Your classification: ${classification}`
  } else {
    result.textContent = 'Please fill all the required fields'
  }
}
