import mongoose from "mongoose";
import BaseRepository from "../libs/BaseRepo/BaseRepository";
import OrderModelInterface from "./OrderModelInterface";
import { orderModel } from './OrderModel'; 
import IQueryCreate from "./IQueryCreate";


class OrderRepository extends BaseRepository<OrderModelInterface, 
      mongoose.Model<OrderModelInterface>> {
    
      constructor() {
        super(orderModel);
      }

      public async create (options: IQueryCreate): Promise<OrderModelInterface> {
        return super.create(options);
      }

}

export default OrderRepository;