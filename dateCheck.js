
// function determines if arrival date is at least one day earlier than departure date
// if dates are valid returns 'true', if dates are invalid returns false

// date format: YYYY-MM-DD


const getYear = (dateString) => parseInt(dateString.slice(0,4));
const getMonth = (dateString) => parseInt(dateString.slice(5,7));
const getDay = (dateString) => parseInt(dateString.slice(8,10));


const dateError = () => {
  console.log('Error. Please enter an arrival date that is earlier than your departure date.');
};

const approveDate = () => {
  console.log('Looks good!');
};

function checkDates(arrivalDate,departureDate) {


  const arrival = {
    year: getYear(arrivalDate),
    month: getMonth(arrivalDate),
    day: getDay(arrivalDate)
  };

  // const arrivalYear = getYear(arrivalDate);
  console.log(`Arrival year: ${arrival.year} and it's a ${typeof arrival.year}`);

  // const arrivalMonth = getMonth(arrivalDate);
  console.log(`Arrival month: ${arrival.month} and it's a ${typeof arrival.month}`);

  // const arrivalDay = getDay(arrivalDate);
  console.log(`Arrival day: ${arrival.day} and it's a ${typeof arrival.day}`);

  const departure = {
    year: getYear(departureDate),
    month: getMonth(departureDate),
    day: getDay(departureDate)
  }

  if (arrival.year == departure.year) {

    if ( ((arrival.month == departure.month) && (arrival.day < departure.day)) || arrival.month < departure.month ) {
        approveDate();
      } else {
        console.log('One');
        dateError();
      }

  } else if (arrival.year < departure.year) {
    approveDate();

  } else {
    dateError();
  }

}

module.exports = {checkDates};