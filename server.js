const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'birthName': 'Savage.',
        'birthLocation': 'London, England',
        'age': 29
    },
    'Chance the Rapper': {
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    'unknown': {
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:names', (request, response) => {
    const rapperName = request.params.names.toLowerCase()
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})
