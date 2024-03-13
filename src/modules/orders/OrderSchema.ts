import BaseSchema from '../libs/BaseRepo/BaseSchema';
import OrderStatus from './enum/OrderStatus';
import OrderType from './enum/OrderType';


class OrderSchema extends BaseSchema {
    constructor(options: any) {
        const baseSchema = {
            _id: {
                type: String
            },
            user_id: {
                type: String
            },
            stock_name: {
                type: String
            },
            price: {
                type: Number
            },
            quantity: {
                type: Number
            },
            status: {
                type: String, // Use String type for enum values
                enum: Object.values(OrderStatus), // Specify the enum values
            },
            type : {
                type: String,
                enum: Object.values(OrderType)
            },
            payment: {
                type: Boolean
            }
        }

        super(baseSchema, options);
    }
}

export default OrderSchema;