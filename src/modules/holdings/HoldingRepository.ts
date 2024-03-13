import mongoose from "mongoose";
import BaseRepository from "../libs/BaseRepo/BaseRepository";
import HoldingModelInterface from "./HoldingModelInterface";
import { holdingModel } from "./HoldingModel";
import IQueryCreate from "./IQueryCreate";


class HoldingRepository extends BaseRepository<HoldingModelInterface, 
mongoose.Model<HoldingModelInterface>> {

    constructor() {
        super(holdingModel);
    }

    public async create (options: IQueryCreate): Promise<HoldingModelInterface> {
        return super.create(options);
      }

}

export default HoldingRepository;