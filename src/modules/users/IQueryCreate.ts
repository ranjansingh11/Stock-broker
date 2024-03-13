import IQueryBaseCreate from "../libs/BaseRepo/IQueryBaseCreate";

interface IQueryCreate extends IQueryBaseCreate {
    id: String,
    name: String,
    email: String
}

export default IQueryCreate;