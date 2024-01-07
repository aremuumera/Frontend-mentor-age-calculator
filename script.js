let date = document.querySelector('#date');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
let label = document.getElementsByTagName('label');
let validYear = document.querySelector('.valid-year');
const ageResult = document.querySelector('.age-result');
let validMonth = document.querySelector('.valid-month');
let validDay = document.querySelector('.valid-day');
const overallValidDate = document.querySelectorAll('.valid');
let calCulateAge = document.querySelector('.calculate-age');

let yearResult = document.querySelector('.year-result');
let monthResult = document.querySelector('.month-result');
let dayResult = document.querySelector('.day-result');



const ageCalculator = () => {

    let uDay = parseInt(date.value);
    let uMonth = parseInt(month.value);
    let uYear = parseInt(year.value);

    //to  Check if the input values are valid numbers
    if (isNaN(uDay) || isNaN(uMonth) || isNaN(uYear)) {
        // Handle invalid input (display an error message, return, etc.)
        return;
    }

    
    //  the user age 
let userDate = new Date(year.value, month.value - 1, date.value).getDate();
let d1 = userDate;
let userMonth = new Date(year.value, month.value - 1, date.value).getMonth() +1;
let m1 = userMonth;
let userYear = new Date(year.value, month.value - 1, date.value).getFullYear();
let y1 = userYear;

// the current or present date 

let currentDate = new Date();
 
let currentDay = currentDate.getDate();
let d2 =currentDay;
let currentMonth = currentDate.getMonth() + 1;
let m2 =currentMonth;
let currentFullYear = currentDate.getFullYear();
let y2 =currentFullYear;

// form validation for the date, month and year on user input value
let isValidDate = d1 >= 1 || d1 <= 31;
    let isValidMonth = m1 >= 1 || m1 <= 12;
    let isValidYear = y1 <= y2;



// this line of code below is to calculate for the year
if (y2 >= y1 && isValidYear){
    y3 = y2 - y1;
}else {
   return error;
//  validYear.classList.add('valid');
//  date.classList.add() = 'red';
    // label.style.color = 'red';
   
}

console.log(y3);
yearResult.innerHTML = y3;
// this line of code below is to calculate for the month
if (m2 >= m1 && isValidMonth){
    m3 = m2 - m1;
}else if (m2 <= m1 && isValidMonth){
    y3--;
    m3 = 12 + m2 - m1;
    // validMonth.style.display = 'block';
    // month.classList.add('red');
    // label.style.color = 'red';
}else if (!isValidMonth){
    return error;
}else{
    return error;
}
monthResult.innerHTML = m3;
console.log(m3);

// this line of code below is to calculate for the day
if (d2 >= d1 && isValidDate){
    d3 = d2 - d1;
}else if(d2 <= d1 && isValidDate) {
    m3--;
    d3 = getValidDate(y1, m1) + d2 - d1 - 2;
    
    // validDay.style.display = 'block';
    // date.style.borderColor = 'red';
   // label.style.color = 'red';
}else if (!isValidDate){
    return error;
}
else{
    return error;
}
dayResult.innerHTML = d3;
console.log(d3);
if(m3 < 0){
    m3 = 11;
    y3--;
} 

// form validation error



const isValidation = () =>{

    if (!isValidYear){
        validYear.classList.add('validate');
        year.style.borderColor = 'hsl(0, 0%, 86%)';
    }else{
        validMonth.classList.remove('validate');
        year.style.borderColor = 'red';
    }
    if (!isValidMonth){
        validMonth.classList.add('validate');
        month.style.borderColor = 'hsl(0, 0%, 86%)';
    }else{
        validMonth.classList.remove('validate');
        month.style.borderColor = 'red';
    }
    if (!isValidDate){
        validDay.classList.add('validate');
        date.style.borderColor = 'hsl(0, 0%, 86%)';
    }else{
        validDay.classList.remove('validate');
        date.style.borderColor = 'red';
    }
    
  
};

isValidation();

}

// end of the function

// let theUserValidDay = /^(0?[1-9]|1[0-2])$/;
// let theUserValidMonth = /^(0?[1-9]|1[0-2])$/;

// const validateMonth = () =>{
//     if (month.value.match(theUserValidMonth)){
//         validMonth.classList.remove('validate');
//         month.style.borderColor = 'hsl(0, 0%, 86%)';
//         // label.style.color = 'red';
//     }else{
//         validMonth.classList.add('validate');
//         month.style.borderColor = 'red';
//     }
// }

// month.addEventListener('click', () =>{
//     validateMonth ();
// })

// const validateDay = () => {
//     if (!date.value.match(theUserValidDay)){
//         validDay.classList.add('valid');
//         date.style.borderColor = 'red';
//         return false;
//     } else {
//         validDay.classList.remove('valid');
//         date.style.borderColor = 'hsl(0, 0%, 86%)';
//         return true;
//     }
// }

// date.addEventListener('click', () =>{
//     validateDay ();
// })



// the function to generate the last day of the month which will return 31
function getValidDate (year, month){
    return new Date (year, month, 0).getDate();
};

// click event for the calendar
calCulateAge.addEventListener('click', () =>{
    ageCalculator ();
})

