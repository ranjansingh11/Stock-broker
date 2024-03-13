import IQueryBaseCreate from "../libs/BaseRepo/IQueryBaseCreate";
import StockInterface from "../stocks/StockInterface";

interface IQueryCreate extends IQueryBaseCreate {
    id: String,
    user_id: String,
    holdings: [StockInterface]
}

export default IQueryCreate;