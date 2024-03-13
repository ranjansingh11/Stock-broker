import HoldingModelInterface from "./HoldingModelInterface";
import HoldingSchema from "./HoldingSchema";
import mongoose from "mongoose";


export const holdingSchema = new HoldingSchema({
    collection: 'Holdings',
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

export const holdingModel:
mongoose.Model<HoldingModelInterface> = mongoose.model<HoldingModelInterface>(
    'Holdings',
    holdingSchema
);