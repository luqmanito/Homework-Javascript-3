

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let authors = data;
        authors.map(function (author) {
            console.log(author.name)
        })
    })
    .catch(err => {
        console.error(err.message);
    })
