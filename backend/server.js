const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

app.set('port', process.env.PORT || 4200);
app.use(express.static('./dist'));

app.use(morgan('dev'));
app.use(express.json());


app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`)
});
