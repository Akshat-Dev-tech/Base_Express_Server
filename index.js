require('dotenv').config();

//syntax for importing express , make an object
const express = require('express');

//app is an instance of express
const app = express();

//port number
//Prod base application we use dot env , we don't directly define it here.
// const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! This is a basic Express server.');
}
);

app.get('/about', (req, res) => {  res.send('This is the About page. Here you can learn more about us.'); }
);


app.get('/getjson', (req, res) => { res.json({ 
    message: 'This is a JSON response from the server.',
    message2: 'This is another message in JSON format.' }); }
);

//listening to the server on PORT 3000
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
}
);