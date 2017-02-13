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
      '<td><button class="deleteEmployeeButton">Delete</button></td>' +
    '</tr>'
    );

// add monthly salary expenses to the DOM
var newEmployeeMonthlyExpenses = annualSalary / 12;
var previousMonthlyExpenses  = $('#monthlyExpenses').text(); // for this to work, we had to set the value to 0 in HTML
var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + parseFloat(newEmployeeMonthlyExpenses);
$('#monthlyExpenses').text(totalMonthlyExpenses); // if we pass something into .text(), it will replace whatever was there.
  });
  // class has to be used for employee button because there are many of them
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    $(this).parent().parent().remove();
    // $(this).closest('tr').remove();  // this can also work
  });
});
