import mongoose from "mongoose";

const sizesSchema = new mongoose.Schema(
    {
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'items',
            required: true
        },
        35:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        36:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        37:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        38:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        39:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        40:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        41:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        42:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        43:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        44:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
        45:{
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },
    }
);

export default mongoose.model('sizes', sizesSchema);