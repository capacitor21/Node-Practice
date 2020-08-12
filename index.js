const express = require('express');
const app = express();

app.listen(3000, () => console.log("listening"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', function (request, response) {
   console.log(request.body); 
   const data = request.body;
   response.json({
       status: 'success',
       latitude: data.lat,
       longitude: data.long
   });
});

