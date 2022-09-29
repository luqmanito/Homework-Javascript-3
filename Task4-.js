const fetchAPI = fetch("https://jsonplaceholder.typicode.com/users");

const promise = fetchAPI.then(res => {
  return res.json()
});

promise.then(data => {
    data.map(data => {
        console.log(data.name)
    })
})
.catch(err => {
    console.error(err.message);
})
