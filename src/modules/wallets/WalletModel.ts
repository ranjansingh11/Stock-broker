import WalletSchema from "./WalletSchema";
import WalletModelInterface from "./WalletModelInterface";
import mongoose from "mongoose";

export const walletSchema = new WalletSchema({
    collection: 'Wallet',
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

export const walletModel:
mongoose.Model<WalletModelInterface> = mongoose.model<WalletModelInterface>(
    'Wallet',
    walletSchema
);