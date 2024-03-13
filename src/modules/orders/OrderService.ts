import OrderInterface from "./OrderInterface";
import OrderRepository from "./OrderRepository";
import WalletService from "../wallets/WalletService";
import OrderStatus from "./enum/OrderStatus";
import OrderType from "./enum/OrderType";
import Database from "../../database/Database";
import { configurations } from "../../config/Configuration";
import {MongoClient} from 'mongodb';

class OrderService {

    private orderRepository : OrderRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
    }

    public async processorder(user_id, stock_name, price, type, quantity) {
        const walletService : WalletService = new WalletService();
           const funds = (await walletService.get({user_id})).funds;
           const costNeeded = price * quantity;
           let status = OrderStatus.IN_PROGRESS;
           
        //    const  : MongoClient = await Database.open(configurations.mongoUri);
        //    client.startSession();
           const orderService : OrderService = new OrderService();
           if(type === OrderType.BUY) {
                if(funds >= (costNeeded)) {
                    status = OrderStatus.COMPLETED;
                    const order = await orderService.create({
                        user_id, stock_name, price, quantity, type, status, payment: true
                    });
                    walletService.updateByField({user_id}, {funds : (funds - costNeeded)});
                    return order;
                } else {
                   throw new Error(`Order Failed. You are ` + ((costNeeded) - funds) + ` short. Please recharge wallet  `);
                }
           } else {
                status = OrderStatus.COMPLETED;
                const order = await orderService.create({
                    user_id, stock_name, price, quantity, type , status, payment: true
                });
                walletService.updateByField({user_id}, {funds : (funds + costNeeded)});
                return order;
           } 
    }

    public async create(query): Promise<OrderInterface> {
        return this.orderRepository.create(query);
    }

    public async get(query): Promise<OrderInterface> {
        return this.orderRepository.findOne(query);
    }
}

export default OrderService;