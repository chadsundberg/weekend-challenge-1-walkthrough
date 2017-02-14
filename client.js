$(document).ready(function(){ // waits for DOM to load
     $('form').on('submit', function(event){ // listens for button clicks inside the form
  // $('#submitNewEmployee').on('click', function(){ // event listener on submitNewEmployee
      event.preventDefault();

      console.log('form values: ', $(this).serializeArray()); //  is looking at the form and creating Objects out of the array
// create an array of the inputs, the inputs are converted to Objects.
// Objects have two properties: name and value.
// { name: 'firstName', value: 'Luke'}
  var submissionArray = $(this).serializeArray();
  var newEmployeeObject = {};  // {firstName: 'Luke', lastName: 'Schlangen'}

  submissionArray.forEach(function(inputFieldObject){
    newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;  // the first time through the array, newEmployeeObject is an empty Object {}
    // same as saying newEmployeeObject.firstName  = Luke;
    // this code allows you to have as many values as you want and assign them to an Object.
    // the second time through the loop inputField is lastName, and the value is Schlangen and so on.
  // });

  // the above two lines of code does the same as the three lines below.

  // for (var i = 0; i < submissionArray.length; i++) {
  //   var inputFieldObject = submissionArray[i];
  //   newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
  // }
console.log('New Employee Object', newEmployeeObject);


// this section is adding new employee row to the DOM
$('#employeeTableBody').append(
    '<tr>' +
      '<td>' + newEmployeeObject.firstName + '</td>' +
      '<td>' + newEmployeeObject.lastName + '</td>' +
      '<td>' + newEmployeeObject.idNumber + '</td>' +
      '<td>' + newEmployeeObject.jobTitle + '</td>' +
      '<td>' + newEmployeeObject.annualSalary + '</td>' +
      '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + '">Delete</button></td>' +
    '</tr>'
  );  // data(), can be stored on the DOM.

// add monthly salary expenses to the DOM
var newEmployeeMonthlyExpenses = annualSalary / 12;
var previousMonthlyExpenses  = $('#monthlyExpenses').text(); // for this to work, we had to set the value to 0 in HTML
var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + parseFloat(newEmployeeMonthlyExpenses);
$('#monthlyExpenses').text(totalMonthlyExpenses); // if we pass something into .text(), it will replace whatever was there.
// clear out input boxes
  $('.employeeFormInput').val('');  // .val('') is being used like .empty()

  });
  // class has to be used for employee button because there are many of them
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    // removing employee salary from total before employee row is deleted and storing it in a new variable.
    var deletedEmployeeSalary = $(this).data('salary'); // .prev() goes to the next cell past the parent element's cell.
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;  // parseFloat is not needed here because subtraction doesn't behave like concatenation
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);

    $(this).parent().parent().remove();
    // $(this).closest('tr').remove();  // this can also work

  });
});
