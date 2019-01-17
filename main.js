

// ----- Browser-sidee validation for arrival and departure dates ---//

//Select DOM elements for use in function below

var elArrivalDate = document.getElementById('arrival-date');
var elDepartureDate = document.getElementById('depart-date');
const elDateError = document.getElementById('dateError');
const elForm = document.getElementById('resForm');

var dateIsValid;


console.log(typeof elArrivalDate.value);

// elForm.addEventListener('submit', checkTheDates(elArrivalDate.value, elDepartureDate.value), false)

const getYear = (dateString) => parseInt(dateString.slice(0,4));
const getMonth = (dateString) => parseInt(dateString.slice(5,7));
const getDay = (dateString) => parseInt(dateString.slice(8,10));

//displays an error message if dates are not valid
const rejectDates = () => {
  elDateError.className = 'displayError';
  dateIsValid = false;
};

//hides error message if dates are valid
const acceptDates = () => {
  dateIsValid = true;
  elDateError.className = 'hideError';
};


function checkTheDates(arrivalDate, departureDate) {

// Assigning the dates to objects allows us to easily access the year / month / day for arrival and departure dates
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

    // console.log(`Arrival year: ${arrival.year} type: ${typeof arrival.year} `);

    if (arrival.year == departure.year) {

      if ( ((arrival.month == departure.month) && (arrival.day < departure.day)) || arrival.month < departure.month ) {
        
          console.log('Dates OK');
          // elDateError.className = 'hideError';
          acceptDates();
  
        } else {
          console.log('Dates rejected');
          // elDateError.className = 'displayError';
          rejectDates();
        }
  
    } else if (arrival.year < departure.year) {
      console.log('Dates OK');
      // elDateError.className = 'hideError';
      acceptDates();
  
    } else {
      console.log('Dates rejected');
      // elDateError.className = 'displayError';
      rejectDates();
    }

}

elArrivalDate.addEventListener('change', () => {
  console.log(elArrivalDate.value, typeof elArrivalDate.value);
  checkTheDates(elArrivalDate.value, elDepartureDate.value);
}, false);

elDepartureDate.addEventListener('change', () => {
  console.log(elDepartureDate.value);
  checkTheDates(elArrivalDate.value, elDepartureDate.value);
}, false);

elForm.addEventListener('submit', () => {
  if (dateIsValid != true) {
    alert('Invalid dates. Please check the arrival and departure dates and try again.');
    event.preventDefault();
  }
});



// console.log(elArrivalDate.value);
// console.log(elDepartureDate.value);