import mongoose from "mongoose";
import BaseRepository from "../libs/BaseRepo/BaseRepository";
import UserModelInterface from "./UserModelInterface";
import { userModel } from './UserModel'; 
import IQueryCreate from "./IQueryCreate";


class UserRepository extends BaseRepository<UserModelInterface, 
      mongoose.Model<UserModelInterface>> {
    
      constructor() {
        super(userModel);
      }

      public async create (options: IQueryCreate): Promise<UserModelInterface> {
        return super.create(options);
      }

}

export default UserRepository;