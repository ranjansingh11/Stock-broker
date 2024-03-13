import IQueryBaseCreate from "../libs/BaseRepo/IQueryBaseCreate";

interface IQueryCreate extends IQueryBaseCreate {
    id: String,
    user_id: String,
    funds: Number
}

export default IQueryCreate;