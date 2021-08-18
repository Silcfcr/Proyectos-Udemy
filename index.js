const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("We got a new request!")
    // console.dir(req) ## vemos el objeto req que se creo con muchos metodos y propiedades
    // res.send("<h1>Hello, we got your request!</h1>")
    // Sends and generates a http response
// })

// routing: taking incoming request in a path and matching it
// root route es /
app.get('/', (req, res) => {
    res.send('This is the homepage!!')
    // res.send se utiliza para responder 
})


// path parameters se utilizan los : para identificar 
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`This is the ${subreddit} subreddit!!`)
})

// pattern doble
app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID} = req.params;
    res.send(`Viewing Post ID: ${postID} in ${subreddit} subreddit`)
})

app.get('/cats', (req, res) => {
    console.log("cat request!")
    res.send('Meoww!!')
    // res.send se utiliza para responder 
})

app.post('/cats', (req, res) =>{
    res.send('Post request to /cats! this is different than a get request!'
    )

})

app.get('/dogs', (req, res) => {
    console.log("dog request!")
    res.send('Woof!!')
    // res.send se utiliza para responder 
})


// query string: portion of the URL that comes after a question mark. We can include information in key value pairs as part of query string.
// usar: http://localhost:8080/search?q=cat
app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send('Nothing found if nothing search')
    }
    res.send(` Search results for ${q}`)
    // res.send se utiliza para responder 
})

app.get('*', (req, res) => {
    res.send("I don't know that path!")
})

app.listen(8080, () => {
    console.log("Listening on port 8080!")
})
 

// npm i -g nodemon
// nodemon index.js para que el servidor se actualice cuando detecta cambios