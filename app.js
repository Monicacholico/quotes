// const http = require('http');


// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
        
//     }
// });

// server.listen(3000);


function executeApi() {
    const url = "http://localhost:3000/";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quote)
    };
    return fetch(url, options).then(
        response => {
            response.json()
        }).then (data => {
            console.log(data.results);
        })

}