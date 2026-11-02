const mongoose=require('mongoose')
const connectDb=()=>{
    mongoose.connect("mongodb://localhost:27017/mern_full").then((result) => {
        console.log("connected..");
        
    }).catch((err) => {
        console.log(err);
        
    });
}
module.exports={connectDb}