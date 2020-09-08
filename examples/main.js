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

let autoCompaniesName = companies.filter(company => company.category === 'Auto').map(company => company.name);
console.log(autoCompaniesName);

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i].name);
// }

// companies.forEach((company) => {
//   console.log(company.category);
// });

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
