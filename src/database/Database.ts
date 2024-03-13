import * as mongoose from 'mongoose';
import { configurations } from '../config/Configuration';

export interface IDatabaseConfig {
  mongoUri: string;
}

export default class Database {
    public static open(mongoUri) {
        return new Promise((resolve, reject) => {
            if(mongoose.connection.getClient())
                return resolve(mongoose.connection.getClient());

            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                autoIndex: false,
            };
            let connectionString = null;
            if (mongoUri) {
                connectionString = mongoUri;
            } else {
                connectionString = configurations.mongoUri;
            }
            mongoose.set('strictQuery', false);
            mongoose.connect(connectionString, options, async (err) => {
                if (err) {
                    return reject(err);
                }
                console.log('Successfully connected to database ')
                return resolve(mongoose.connection.getClient());
            });
            mongoose.connection.on('error', () => reject(new Error(`unable to connect to database: ${mongoUri}`)));
        });
    }

    public static close() {
        mongoose.disconnect();
    }
}