$(document).ready(function(){ // waits for DOM to load
  $('#submitNewEmployee').on('click', function(){ // event listener on submitNewEmployee
    // declaring variables and retrieving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
// this section is adding new employee row to the DOM
$('#employeeTableBody').append(
    '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
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
