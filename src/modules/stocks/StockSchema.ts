import BaseSchema from '../libs/BaseRepo/BaseSchema';

class StockSchema extends BaseSchema{
    constructor(options: any) {
        const baseSchema = {
            _id : {
                type: String
            },
            name : {
                type: String
            },
            price : {
                type: Number
            },
            quantity : {
                type: Number
            }
        };
        super(baseSchema, options);
    }
}

export default StockSchema;