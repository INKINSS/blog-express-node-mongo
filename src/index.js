const express = require('express')
const app = express();
const conection = require('./database/conection');
const router = require('./routes/post.routes');

const PORT = process.env.VITE_PORT || 3000;

//conection
conection()
//use
app.use('/', router)

//set

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});