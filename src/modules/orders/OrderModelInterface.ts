import IBaseDocument from "../libs/BaseRepo/IBaseDocument";
import orderStatus from "./enum/OrderStatus";
import orderType from "./enum/OrderType";

interface OrderModelInterface extends IBaseDocument{
    id: string,
    user_id: string,
    stock_name: string,
    price: number,
    quantity: number,
    status : orderStatus,
    type: orderType,
    payment: boolean
}

export default OrderModelInterface;