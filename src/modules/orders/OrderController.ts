import { error } from "console";
import WalletService from "../wallets/WalletService";
import OrderService from "./OrderService";
import OrderStatus from "./enum/OrderStatus";
import OrderType from "./enum/OrderType";
import { Error } from "mongoose";

class OrderController {

    private static orderInstance;

    public static getOrder() {
        if(!OrderController.orderInstance) {
            OrderController.orderInstance = new OrderController();
        }
        return OrderController.orderInstance;
    }

    public create = async (req, res, next) => {
        try {
           const {user_id, stock_name, price, type, quantity} = req.body;
           const orderService: OrderService = new OrderService();
           const order = orderService.processorder(user_id, stock_name, price, type, quantity);

           order.then((order) => {
               res.send("Successfully created order :"+order);
           }).catch((error) => {
               throw new Error("Issues while creating order"+error);
           });
           
        } catch (error) {
           next(error);
       }
   }
}

export default OrderController.getOrder();