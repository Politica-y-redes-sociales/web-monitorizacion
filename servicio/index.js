const express=require('express');
const morgan= require('morgan');
const router = require('./router/router');
const app=express();
const path=require('path')
const cors=require('cors');

app.set('port',process.env.PORT || 4000);


app.use(morgan('dev'));

app.use(express.json());

app.use(router);

app.use(cors());

app.use(express.static(path.resolve(__dirname,'../public/')));



app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port'));
});