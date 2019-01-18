
// date format: YYYY-MM-DD


// Functions to assign year / month / day to consts & convert strings to integers
const getYear = (dateString) => parseInt(dateString.slice(0,4));
const getMonth = (dateString) => parseInt(dateString.slice(5,7));
const getDay = (dateString) => parseInt(dateString.slice(8,10));

// One of these values is returned when the checkDates() function is called
const dateApproved = true;
const dateRejected = false;


// checkDates() function determines if the provided arrival date is at least one day earlier than the provided departure date that the user has entered
// if dates are valid returns 'true', if dates are invalid returns false

function checkDates(arrivalDate,departureDate) {

  // assigning the dates to objects allows us to easily access the year / month / day for arrival and departure dates
  const arrival = {
    year: getYear(arrivalDate),
    month: getMonth(arrivalDate),
    day: getDay(arrivalDate)
  };

  const departure = {
    year: getYear(departureDate),
    month: getMonth(departureDate),
    day: getDay(departureDate)
  }

  if (arrival.year == departure.year) {

    if ( ((arrival.month == departure.month) && (arrival.day < departure.day)) || arrival.month < departure.month ) {
      
        return dateApproved;

      } else {
        return dateRejected;
      }

  } else if (arrival.year < departure.year) {
    return dateApproved;

  } else {
    return dateRejected;
  }

}

// // Check blackout dates - incomplete for now

// const blackedOut = [
//   {
//     // room: 'irrigation',
//     blackOutStart: '2019-02-01',
//     blackOutEnd: '2019-02-05'
//   },
//   {
//     // room: 'irrigation',
//     blackOutStart: '2019-03-01',
//     blackOutEnd: '2019-03-05'
//   }
// ];
  
// function checkBlackOutDates() {

//   blackedOut.forEach( (dates) => {
//     // set blackout start date (int's) to an object
//     let start = {
//       year: getYear(dates.blackOutStart),
//       month: getMonth(dates.blackOutStart),
//       day: getDay(dates.blackOutStart)
//     };

//     // set blackout end date (int's) to an object
//     let end = {
//         year: getYear(dates.blackOutEnd),
//         month: getMonth(dates.blackOutEnd),
//         day: getDay(dates.blackOutEnd)
//     };
    
//     //if arrival date OR the departure date lies between the blackout start and end dates, throw and error

//     //e.g. 2019/2019 or 2019/2020
//     //is the arrival between the dates?
//     if ( (arrival.year >= start.year && arrival.year <= end.year ) ) { //year check


      
//     } else {
//       //dates blacked not out
//     }

    
//   });


// }

module.exports = {checkDates};