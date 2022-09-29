const fetchAPI = fetch("https://jsonplaceholder.typicode.com/users");

const promise = fetchAPI.then(res => {
    return res.json()
});

promise
    .then(data => {
        const showedData = data.map(data => data.name)
        console.log(showedData)
    })
    .catch(err => console.error(err.message)
    )
