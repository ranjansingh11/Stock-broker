import UserModelInterface from "./UserModelInterface";
import UserSchema from "./UserSchema";
import mongoose from "mongoose";

export const userSchema = new UserSchema({
    collection: 'Users',
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

export const userModel:
mongoose.Model<UserModelInterface> = mongoose.model<UserModelInterface>(
    'Users',
    userSchema
);