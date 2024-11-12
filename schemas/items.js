import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        brand: {
            type : String,
            required : true
        },
        model: {
            type : String,
            required : true
        },
        stock: {
            type : Number,
            required : true
        },
        color: {
            type : String,
            required : true
        },
        image: {
            type : String,
            default : 'https://static.thenounproject.com/png/1554490-200.png',
        },
        description: {
            type : String,
        },
        category: {
            type : String,
            //default : 'Runner'
        },
        price: {
            type : Number,
            min: 0,
        }
    }, {timestamps:true}
);

export default mongoose.model('items', itemSchema)