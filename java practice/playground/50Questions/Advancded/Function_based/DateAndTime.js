// 44.Gusee the output:

// let date = new Date(0);
// let date_now = new Date();

// console.log(date.toLocaleString());
// console.log(date_now.getTime());

// 45.Validate that a user selected date range is no longer than 30 days.

// let nowDate = new Date('2025-05-23'); //yyyy-mm-ddThh:mm:ss:sss

// console.log(nowDate.toLocaleString());

// let userDate = new Date('2025-05-25');

// let diff = userDate - nowDate;
// let numOfDays = (Math.floor(diff/1000/60/60/24))  //1s = 1000ms, 1m = 60s

// if (numOfDays > 30) {
//     console.log("form is Expired, Form is valid only for 30 days. ");
// }
// else{
//     console.log("Congratulations form is Submited. ")
// }

//46. Calculate difference between two dates in the formate of yyyy-mm-dd_hh-mm-ss.

// let startingDate = new Date('2024-04-12T08:23:12Z');

// let endDate = new Date('2025-09-23T09:24:50Z');

// function TakeDiff(start, end) {
//     let diff = (end - start) / 1000;
//     let years = Math.floor(diff / (60 * 60 * 24 * 365));
//     diff = diff % (60 * 60 * 24 * 365);
//     let Months = Math.floor(diff / (60 * 60 * 24 * 30));
//     diff = diff % (60 * 60 * 24 * 30);
//     let days = Math.floor(diff / (60 * 60 * 24));
//     diff = diff % (60 * 60 * 24);
//     let Hours = Math.floor(diff / (60 * 60));
//     diff = diff % (60 * 60);
//     let Min = Math.floor(diff / (60));
//     diff = diff % (60);

//     let sec = diff;

//     return `${years} Years ${Months} Months ${days} Days ${Hours} Hours ${Min} Min ${sec} Sec`;
// }

// let diff = TakeDiff(startingDate, endDate);
// console.log(diff);

// method 2. using luxon package


// let startingDate = '2024-04-12T08:23:12.232Z';

// let endDate = '2025-09-23T09:24:50.236Z';

// let { DateTime } = require('luxon');

// function TakeDifference(start, end) {
//     let startDate = DateTime.fromISO(start)
//     let endDate = DateTime.fromISO(end)

//     let diff = endDate.diff(startDate, ['year', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']);

//     return `${diff.years} Years ${diff.months} Months ${diff.days} Days ${diff.hours} Hours ${diff.minutes} Min ${diff.seconds} Sec ${diff.milliseconds} millisec `;
// }

// let diffTime =  TakeDifference(startingDate, endDate);
// console.log(diffTime);

// 47.Add or Subtract days from a given date.


// let startingDate = new Date('2024-04-12T08:23:12.232Z');
// console.log(startingDate);

// let n = 13;

// let newDateTime = startingDate.getTime() + (n * 24 * 60 * 60 * 1000);
// let newDate = new Date(newDateTime);
// console.log(newDate);

// 48.Calculate the users age from their DOB.

// let userDOB = new Date('2004-09-25');
// console.log(userDOB);
// let currentDate = new Date();
// let age = (currentDate.getFullYear() - userDOB.getFullYear());
// let monthsDiff = currentDate.getMonth() - userDOB.getMonth();
// let daysDiff = currentDate.getDate() - userDOB.getDate();

// if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
//     age--;
// }
// console.log(age);

// 49.Write a function that return a user friendly formated date like 1 jan,2025. Why is it better to centralize this logic in a utility?


let date = '2024-04-12T08:23:12.232Z';
function formateDate(dateStr) {
    let date = new Date(dateStr);
    return (date.toLocaleDateString('en-In', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }));
}
let formatedDate = formateDate(date);
console.log(formatedDate);

// 50.What is the different options and parameter in LocalString and toLocalDateString etc to formated date.


