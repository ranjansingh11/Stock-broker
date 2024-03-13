import IBaseDocument from "../libs/BaseRepo/IBaseDocument";

interface WalletModelInterface extends IBaseDocument{
    id? : string,
    user_id: string,
    funds : number
}

export default WalletModelInterface;