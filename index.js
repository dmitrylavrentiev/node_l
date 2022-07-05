const users = require('./users')

const http = require('http')
const fs = require('fs')
const path = require('path')

const servAPI = require('./ServAPI')

//console.log(users)

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    if(req.method === 'POST') {
        const body = []

        req.on('data', data => {
            body.push(Buffer.from(data))
        })
        req.on('end', () => {
            console.log(body);
            const a = body.toString()
            console.log(a);
            res.end(`
                <h1>res: ${a}</h1>
            `)
        })
    }

    let urlPath = ''

    if(req.url === '/') {
        urlPath = path.join(__dirname, 'views', 'index.html')
        openPage(urlPath, res)
    } else if(req.url === '/about'){
        urlPath = path.join(__dirname, 'views', 'about.html')
        openPage(urlPath, res)
    } else if(req.url === '/api'){
        res.writeHead(200, {
            'Content-Type': 'text/json'
        })
        res.end(JSON.stringify(users))
    }
    
    

})

function openPage(url, res) {
    fs.readFile(
        url,
        'utf-8',
        (err, content) => {
            if(err) throw new Error(err)
            res.end(content)
        }
    )
}

server.listen(3000, () => {
    console.log('server is running...');
})