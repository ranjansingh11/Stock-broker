import IBaseDocument from "../libs/BaseRepo/IBaseDocument";
import StockInterface from "../stocks/StockInterface";

interface HoldingModelInterface extends IBaseDocument{
    id : string,
    user_id: string,
    holdings: StockInterface[];
}

export default HoldingModelInterface;