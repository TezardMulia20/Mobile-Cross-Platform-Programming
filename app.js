const calculateBtn = document.getElementById('calc-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBMI = () => {
    const enteredHeight = +heightInput.value / 100;
    const enteredWeight = +weightInput.value / 100;

    const bmi = enteredWeight / (enteredHeight * enteredHeight);


    console.log(bmi);
}

