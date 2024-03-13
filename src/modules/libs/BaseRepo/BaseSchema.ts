import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collections: any) {
        const versionedOptions = {
            createdAt: {
                required: false,
                default: Date.now,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            updatedAt: {
                default: Date.now,
                type: Date,
            },
            ...options,
        };
        super(versionedOptions, collections);
    }
}

export default VersionableSchema;
