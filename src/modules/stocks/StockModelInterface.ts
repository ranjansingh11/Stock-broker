import IBaseDocument from "../libs/BaseRepo/IBaseDocument";

interface StockModelInterface extends IBaseDocument {
    id: string, 
    name: string,
    price: number,
    quantity: number
}

export default StockModelInterface;