import * as mongoose from 'mongoose';
import IQueryBaseUpdate from './IQueryBaseUpdate';
import IQueryUpdate from './IQueryUpdate';
import IQueryBaseDelete from './IQueryBaseDelete';

export default class BaseRepository <
D extends mongoose.Document, M extends mongoose.Model<D>
> {
    public static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }

    private ModelType: M;

    constructor(modelType) {
        this.ModelType = modelType;
    }

    public async create(options: any): Promise < D > {
        const { _id } = options;
        const id = BaseRepository.generateObjectId();
        const model = new this.ModelType(
            {
                ...options,
                _id: _id || id,
            },
        );
        return model.save();
    }

    public async count(query: any): Promise < number > {
        return this.ModelType.count(query);
    }

    public async findOne(query: any, projection: any = {}): Promise < D > {
        return this.ModelType.findOne(query, projection);
    }

    public async update(query: IQueryBaseUpdate, itemsToUpdate: IQueryUpdate): Promise<D> {
        const option = { _id: query };
        const update = { ...itemsToUpdate };
        await this.ModelType.findByIdAndUpdate(option, update);
        const result = await this.ModelType.findById(query);
        return result;
    }

    public async updateByField(
        queryOption: IQueryBaseUpdate,
        itemsToUpdate: IQueryUpdate,
    ): Promise<D> {
        const option = queryOption;
        const update = { ...itemsToUpdate };
        await this.ModelType.updateOne(option, update);
        const result = await this.ModelType.findOne(queryOption);
        return result;
    }

    protected async list(
        query : any = {},
        projection: any = {},
        options : any = {},
    ): Promise<D[]> {
        return this.ModelType.find(query, projection, options);
    }

    protected async delete(query : IQueryBaseDelete): Promise<mongoose.UpdateQuery<D>> {
        return this.ModelType.deleteOne(query);
    }

    public async insertMany(documents: any[]): Promise<any> {
        return this.ModelType.insertMany(documents);
    }

    public async deleteMany(query: IQueryBaseDelete): Promise<any> {
        return this.ModelType.deleteMany(query);
    }

    public async aggregate(aggPipe: []): Promise<any> {
        return this.ModelType.aggregate(aggPipe);
    }
}
