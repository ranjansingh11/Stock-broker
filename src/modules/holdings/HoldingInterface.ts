import StockInterface from "../stocks/StockInterface";

interface HoldingInterface {
    id? : string,
    user_id: string,
    holdings?: StockInterface[];
}

export default HoldingInterface;