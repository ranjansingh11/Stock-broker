import mongoose from "mongoose";
import StockSchema from "./StockSchema";
import StockModelInterface from './StockModelInterface';


export const stockSchema = new StockSchema({
    collection: 'Stocks',
    toJSON: {
        transform: (doc, ret) => {
            const res = ret;
            res.id = res._id;
            delete res._id;
            delete res.__v;
        },
        virtuals: true,
    }
});

export const stockModel:
mongoose.Model<StockModelInterface> = mongoose.model<StockModelInterface>(
    'Stocks',
    stockSchema
);