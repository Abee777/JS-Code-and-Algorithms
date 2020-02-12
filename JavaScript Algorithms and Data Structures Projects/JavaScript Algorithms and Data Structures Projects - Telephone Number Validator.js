/* Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the 
format of a valid US number. The following are examples of valid formats for US 
numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555 
*/

// Solution 1:

function telephoneCheck(str) {
  let regEx = /^(1\s?)?(\d{3}|(\(\d{3}\)))[\s-]?\d{3}[\s-]?\d{4}$/
  return regEx.test(str);
}

// Solution 2:

function telephoneCheck(str) {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
}

// For more validations -> https://github.com/google/libphonenumber
