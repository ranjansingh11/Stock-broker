interface StockInterface {
    id?: string, 
    name: string,
    price: number,
    quantity: number    // adding the attribute to update quantity of stocks on buy and sell each stock from the system.
}

export default StockInterface;