const express = require('express')
const app = express();
const conection = require('./database/conection')

const PORT = process.env.VITE_PORT || 3000;

//conection
conection()
//user

//set

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});