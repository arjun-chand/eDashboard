const express = require('express');
const cors = require('cors');

require('./db/config')

const app = express();

app.use(express.json());//to diaplay payload 
app.use(cors());

app.use('/Ecommerce', require('./routes/userRoutes'));
app.use('/Ecommerce', require('./routes/productRoutes'));

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});