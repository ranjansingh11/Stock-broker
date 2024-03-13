import IQueryBaseCreate from "../libs/BaseRepo/IQueryBaseCreate";
import OrderStatus from "./enum/OrderStatus";
import OrderType from "./enum/OrderType";


interface IQueryCreate extends IQueryBaseCreate {
    id: String,
    user_id: String,
    stock_name: String,
    price: Number,
    quantity: Number,
    status: OrderStatus,
    type: OrderType,
    payment: Boolean
}

export default IQueryCreate;