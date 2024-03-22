//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.querySelector("#startValue").value;
    let endValue = document.querySelector("#endValue").value;

    //reset the values to interger
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //we need to validate our input
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let number = generateNumbers(startValue, endValue);

        //call displayNumbers
        displayNumbers(number);

    } else {
        alert('You must enter integers');
    }

}

//generate numbers frm the start value to the end value
//logic function
function generateNumbers(startValue, endValue) {
    let number = [];
    //we want to get all numbers from start to end
    for (let i = startValue; i <= endValue; i++) {
        //this will execute in a loop until i === endValue
        //
        number.push(i);
    }
    return number;
}

//display the numbers and mark the even numbers bold
//display or view function
function displayNumbers(number) {
    let templateRow = '';
    let className = 'even';
    for(let i=0; i<number.length;i++){
        let num = number[i];
        if(num%2==0){
            className = 'even';
        }else{
            className = 'odd';
        }
        templateRow += `<tr><td class=${className}>${num}</td></tr>`
    }

    document.querySelector('#results').innerHTML=templateRow;
}