
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello This is my first nodejs web server')
    res.end()
})

server.listen(5000, () => {
    console.log(`Server is running on port http://localhost:5000`)
})
