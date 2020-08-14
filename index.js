const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(3000, () => console.log("listening"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', function (request, response) {
   console.log(request.body); 
   const data = request.body;

   const timestamp = Date.now();
   data.timestamp = timestamp;

   database.insert(data);
   response.json({
       status: 'success',
       timestamp: timestamp,
       latitude: data.lat,
       longitude: data.long,
       value: data.input 
   });
});

app.get('/api', (request, response) => {
    response.json({test: 123});
    
});