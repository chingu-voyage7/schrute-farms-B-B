
// ----- Browser-side validation for arrival and departure dates ---//

//Select DOM elements for use in function below
const elArrivalDate = document.getElementById('arrival-date');
const elDepartureDate = document.getElementById('depart-date');
const elDateError = document.getElementById('dateError');
const elForm = document.getElementById('resForm');

var dateIsValid = false;

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


    if (arrival.year == departure.year) {

      if ( ((arrival.month == departure.month) && (arrival.day < departure.day)) || arrival.month < departure.month ) {
          // console.log('Dates OK');
          acceptDates();
        } else {
          // console.log('Dates rejected');
          rejectDates();
        }
    } else if (arrival.year < departure.year) {
      // console.log('Dates OK');
      acceptDates();
    } else {
      // console.log('Dates rejected');
      rejectDates();
    }
}

//Listen for a date change in the Arrival date box
elArrivalDate.addEventListener('change', () => {
  console.log(elArrivalDate.value, typeof elArrivalDate.value);
  checkTheDates(elArrivalDate.value, elDepartureDate.value);
}, false);

//Listen for a date change in the Departure date box
elDepartureDate.addEventListener('change', () => {
  console.log(elDepartureDate.value);
  checkTheDates(elArrivalDate.value, elDepartureDate.value);
}, false);

// Listen for form submission
elForm.addEventListener('submit', () => {
  //do a final check of the dates
  checkTheDates(elArrivalDate.value, elDepartureDate.value);
  //prevent submission if dates invalid and alert user
  if (dateIsValid != true) {
    alert('Invalid dates. Please check the arrival and departure dates and try again.');
    event.preventDefault();
  }
});