const app = require('./index')

const connect = require('./configs/db')

app.listen(2000,async()=>{
    try {
       await connect();
        
    } catch (err) {
        console.log('err: ', err);
        
    }
    console.log("Listening to port 2000")
    })