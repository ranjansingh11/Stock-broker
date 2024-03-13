import IBaseDocument from "../libs/BaseRepo/IBaseDocument";

interface UserModelInterface extends IBaseDocument {
    id: string,
    name: string,
    email: string,
}

export default UserModelInterface;