import * as mongoose from 'mongoose';

interface IBaseDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export default IBaseDocument;
