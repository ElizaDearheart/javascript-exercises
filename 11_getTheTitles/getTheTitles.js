const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

const getTheTitles = function (books) {
    let titles = books.map(({ title }) => title);
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
