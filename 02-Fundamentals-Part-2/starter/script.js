'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true
}

if (hasDriversLicense) {
    console.log('nice');
}

const interface = 'Foo';
*/

/*
function logger() {
    console.log('Hello there')
    return '1'
}

logger();
let f = logger();
console.log(f);
*/

/*
function calcAge1(birthYear) {
    return 2037 - birthYear
}

const jesus = calcAge1(0);
console.log(jesus)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear
};

const age2 = calcAge2(1);
console.log(age2)
*/

/*
// Arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(2);
console.log(age3);

const yearUntilRetire = (birthYear, name) => {
    const age = 2024 - birthYear;
    const retireAge = 65 - age;
    return `${name} you'll never retire. But I'll lie and say ${retireAge} years.`
}

const retire = yearUntilRetire(2000, 'jack');
console.log(retire)
*/

/*
const friends = ["mike", "steve", "peter"]
console.log(friends.length)
console.log(friends[0])
friends[0] = 'foo'
console.log(friends[0])

const years = new Array(1, 2, 3, 4, 5)
console.log(years[years.length - 1])

const calcAge = function (birthYear) {
    return 2028 - birthYear
}

const moreYears = [1990, 1999, 2010, 2020]
const ages = [calcAge(moreYears[0]), calcAge(moreYears[1]), calcAge(moreYears[moreYears.length - 1])]
console.log(ages)
*/

/*
const friends = ["mike", "steve", "peter"];
friends.push("Aaron"); // add to back
console.log(friends);

friends.unshift("Rodgers");
console.log(friends); // add to the front

friends.pop(); // remove last
console.log(friends);

friends.shift(); // remove first
console.log(friends);

console.log(friends.indexOf("steve"));
console.log(friends.includes("peter"), friends.includes("jesus"));
*/

/*
const aaron = {
    firstName: 'aaron',
    lastName: 'Rodgers',
    superBowls: 1000,
    teams: ["Packers", "Jets"],
}

console.log(aaron["firstName"], aaron.firstName);


const interestedIn = prompt('What do you want to know?');
console.log(aaron[interestedIn]);

aaron.thing = 'more';
aaron['thing2'] = 'thing2';
*/

/*
const aaron = {
    firstName: 'aaron',
    lastName: 'Rodgers',
    superBowls: 1000,
    teams: ["Packers", "Jets"],
    birthYear: 1885,

    // calcAge: function () {
    //     return 2028 - this.birthYear
    // }

    calcAge: function (birthYear) {
        if (this.age) {
            return this.age
        }
        console.log('Crunching the numbers...')
        this.age = 2028 - this.birthYear
        return this.age;
    }
}

console.log(aaron.calcAge());
console.log(aaron.calcAge());
console.log(aaron.age);
*/
