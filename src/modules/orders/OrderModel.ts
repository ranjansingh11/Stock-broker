import mongoose from "mongoose";
import OrderSchema from "./OrderSchema";
import OrderModelInterface from './OrderModelInterface';


export const orderSchema = new OrderSchema({
    collection: 'Orders',
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

export const orderModel:
mongoose.Model<OrderModelInterface> = mongoose.model<OrderModelInterface>(
    'Orders',
    orderSchema
);