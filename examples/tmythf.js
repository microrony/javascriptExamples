const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// let agesSum = ages.reduce((total, age) => total + age, 0);
// console.log(agesSum);

// let agesSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// console.log(agesSum);

// let sortAges = ages.sort((a, b) => a > b ? 1 : -1);
// console.log(sortAges);

// let sortedCompalies = companies.sort((a, b) => a.start > b.start ? 1 : -1);
// let sortedCompalies = companies.sort ((a, b) => {
//   if (a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompalies);

// let nightCompany = companies.filter(company => company.start === 1999).map(company => company.name);
// console.log(nightCompany);

// let autoCompaniesName = companies.filter(company => company.category === 'Auto').map(company => company.name);
// console.log(autoCompaniesName);

// let goodCompaniesStartYear = companies.filter(company => (company.end - company.start) >= 10).map(company => company.start);
// console.log(goodCompaniesStartYear);

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].name);
}

companies.forEach((company) => {
  console.log(company.category);
});

// companies.forEach((company) => console.log(company.end));

// let salahIsFarg = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     salahIsFarg.push(ages[i]);
//   }
// }
// console.log(salahIsFarg);

// let salahIsFarg = ages.filter((age) => age >= 21);
// let salahIsFarg = ages.filter((age) => age > 15 && age < 44);
// console.log(salahIsFarg);

// let autoCompany = companies.filter((company) => {
//   if (company.category === 'Auto') {
//     return true;
//   }
// });

// let autoCompany = companies.filter((company) => company.category === 'Auto');
// console.log(autoCompany);

// let oldCompanies = companies.filter((company) => company.start <= 1990);
// console.log(oldCompanies);

// let goodCompanies = companies.filter(company => (company.end - company.start) >= 10);
// console.log(goodCompanies);

