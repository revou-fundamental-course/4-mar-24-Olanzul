function calculateBMI(){
    try {
        var weight = parseFloat(document.getElementById('weight').value);
        var height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
        // if (isNaN(weight)||isNaN(height)||height<=0||weight<=0){
        //     document.getElementById('result').innerText = "Silahkan masukkan berat dan tinggi yang valid."
        //     return;
        if (isNaN(weight) || weight <= 0 || weight > 500) {
            alert("Please enter a valid weight.");
            return;
        }

        // Check if height is a valid number and within a reasonable range
        if (isNaN(height) || height <= 0 || height > 3) {
            alert("Please enter a valid height.");
            return;
        }
        

        var bmi = weight / (height * height);
        var category;

    if  (bmi<18.5) {
        category="Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    // console.log(result);
    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
    document.getElementById("category").innerText =  category
    } catch (error) {
        console.log(error);
    }
    
    // (document.getElementById('result').innerText =bmi.toFixed(2));

   
}

// let weightInput = document.getElementById('weight-input').value;
// console.log(weightInput);

// if (weightInput == ' '){
//     alert('Harap isi berat badan')
// console.log('Not Number')
// } else {
//     document.getElementById('result').innerHTML = weightInput
//     console.log('Ada isi');
// }