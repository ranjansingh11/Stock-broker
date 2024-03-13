import mongoose from "mongoose";
import WalletModelInterface from "./WalletModelInterface";
import BaseRepository from "../libs/BaseRepo/BaseRepository";
import { walletModel } from "./WalletModel";
import IQueryCreate from "./IQueryCreate";
import WalletInterface from "./WalletInterface";


class WalletRepository extends BaseRepository <WalletModelInterface, 
mongoose.Model<WalletModelInterface>> {
    constructor() {
        super(walletModel);
    }

}

export default WalletRepository;