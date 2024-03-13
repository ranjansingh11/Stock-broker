import BaseSchema from '../libs/BaseRepo/BaseSchema';
import { Schema } from 'mongoose';

class HoldingSchema extends BaseSchema {
    constructor(options) {
        const baseSchema = {
            _id: {
                type: String
            },
            user_id: {
                type: String
            },
            holdings: [
                {
                    type: Schema.Types.Mixed
                }
            ]
        }
        super(baseSchema, options)
    }
}

export default HoldingSchema;