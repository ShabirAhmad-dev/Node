
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === "/"){
//         res.end("Home Page")
//     }
//     else if (req.url === "/about"){
//         res.end("About Page")
//     }
//     else{
//         res.end(` ${req.url} Page does not exist`)
//     }

// })

// server.listen(5000, () => {
//     console.log(`Server is running on port http://localhost:5000`)
// })


const {readFile} = require("fs/promises");

const getData = async (path) => {
        const data = await readFile(path, 'utf8',)
            return data
        };

getData('./contends/firstfile.txt').then(console.log).catch(console.error)
