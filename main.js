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

function getMySalary(country) {
  let result = {};
  result.salary = parseFloat((1500 - 0.5 + Math.random() * 501).toFixed());
  result.taxes = parseFloat((this.tax * result.salary).toFixed());
  result.profit = parseFloat((result.salary - result.taxes).toFixed());

  return result;
}
function task4() {
  console.log(getMySalary(latvia));
}

setInterval(task4, 10000);
