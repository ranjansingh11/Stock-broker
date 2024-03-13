import WalletInterface from "./WalletInterface";
import WalletRepository from "./WalletRepository";


class WalletService {
    private walletRepository : WalletRepository;

    constructor() {
        this.walletRepository = new WalletRepository();
    }

    public async create(query): Promise<WalletInterface> {
        return this.walletRepository.create(query);
    }

    public async get(query): Promise<WalletInterface> {
        return this.walletRepository.findOne(query);
    }

    public async updateByField(queryOptions, itemsToUpdate: any): Promise<WalletInterface> {
        return this.walletRepository.updateByField(queryOptions, itemsToUpdate);
    }
}

export default WalletService;