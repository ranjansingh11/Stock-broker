import BaseSchema from '../libs/BaseRepo/BaseSchema';


class WalletSchema extends BaseSchema {
    constructor (options) {
        const baseSchema = {
            _id : {
                type: String
            },
            user_id : {
                type: String
            },
            funds : {
                type: Number
            }
        }

        super(baseSchema, options);
    }
}

export default WalletSchema;