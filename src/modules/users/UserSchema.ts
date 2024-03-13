import BaseSchema from '../libs/BaseRepo/BaseSchema';

class UserSchema extends BaseSchema{
    constructor(options: any) {
        const baseSchema = {
            _id: {
                type: String,
            },
            name: {
                type: String
            },
            email: {
                type: String
            }
        };
        super(baseSchema, options);
    }
}

export default UserSchema;