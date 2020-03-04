const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 2000));

function getMiddleTaxes() {
  return this.middleSalary * this.tax;
}
console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}

console.log(getTotalTaxes.call(ukraine));


function getMySalary() {
  let result = {};
  let randomSalary = Math.round(1500 + Math.random() * 500);
  result.salary = randomSalary;
  result.taxes = this.tax * randomSalary;
  result.profit = result.salary - result.taxes;
  console.log(result);
}
const  intervalTask = setInterval(() => getMySalary.call(ukraine), 10000);
