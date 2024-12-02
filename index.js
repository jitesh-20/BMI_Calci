const mainele = document.querySelector('.maindiv')
// console.log(mainele);
// console.log(mainele.children);

const btn = document.querySelector('#calcibtn')
// console.log(btn);

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#heighttxt').value);              //It will take the value of height textfield...
    // console.log(num1)
    const weight = parseInt(document.querySelector('#weighttxt').value);              //It will take the value of weight textfield...
    // console.log(num2)
    const result = document.querySelector('#result')                                  //It selects the whole tag...

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi <= 18.6) {
            result.innerHTML = `<span>${bmi} kg/m<sup>2</sup> (Under Weight)</span>`
        }
        else if (bmi > 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>${bmi} kg/m<sup>2</sup> (Normal Range)</span>`
        }
        else {
            result.innerHTML = `<span>${bmi} kg/m<sup>2</sup> (OverWeight)</span>`
        }
    }
})

const clearbtn = document.querySelector('#clearbtn')
clearbtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#heighttxt').value = ""
    document.querySelector('#weighttxt').value = ""
    const result = document.querySelector('#result')
    result.innerHTML = ""
})

