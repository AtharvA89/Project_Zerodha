const {Schema} =require("mongoose");


const HoldingsSchema=new Schema({

    name: String,
    qty:Number,
    avg: Number,
    price: String,
    net:String,
    day: String,
});

module.exports ={ HoldingsSchema};