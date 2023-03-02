const findTheOldest = function () {

    const people = [
        {
            name: "Carly",
            yearOfBirth: 1942,
            yearOfDeath: 1970,
        },
        {
            name: "Ray",
            yearOfBirth: 1962,
            yearOfDeath: 2011,
        },
        {
            name: "Jane",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
        },
    ]

    let oldestPerson;

    let listByAges = people.sort(function (a, b) {
        let lastGuy = a.yearOfDeath - a.yearOfBirth;
        let nextGuy = b.yearOfDeath - b.yearOfBirth;

        return lastGuy > nextGuy ? 1 : -1;
    })

    oldestPerson = listByAges.pop()
    return oldestPerson
};

/*
if (!yearOfDeath) {
            let lastGuy = a.Date() - a.yearOfBirth;
            let nextGuy = b.Date() - b.yearOfBirth
        }
*/

// Do not edit below this line
module.exports = findTheOldest;
