import orderStatus from "./enum/OrderStatus";
import orderType from "./enum/OrderType";


interface OrderInterface {
    id?: string,
    user_id: string,
    stock_name: string,
    price: number,
    quantity: number,
    status?: orderStatus,
    type: orderType,
    payment?: boolean
}

export default OrderInterface;