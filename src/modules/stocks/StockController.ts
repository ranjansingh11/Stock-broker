import { deflate } from "zlib";
import StockService from "./StockService";

class StockController {

    private static stockInstance;

    public static getStock() {
        if(!StockController.stockInstance) {
            StockController.stockInstance = new StockController();
        }
        return StockController.stockInstance;
    }

    public create =async (req, res, next) => {
        try {
           const {name, price, quantity} = req.body;
           const stockService : StockService = new StockService();
           const sale = await stockService.create({
               name, price, quantity
           });
           res.send("Successfully created the stock" + sale);
           
        } catch (error) {
           next(error);
       }
   }
}

export default StockController.getStock();