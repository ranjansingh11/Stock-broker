import HoldingInterface from "./HoldingInterface";
import HoldingRepository from "./HoldingRepository";

class HoldingService {
    private holdingRepository: HoldingRepository;

    constructor() {
        this.holdingRepository = new HoldingRepository();
    }

    public async create(query) : Promise<HoldingInterface>{
        return this.holdingRepository.create(query);
    }


    public async get(query): Promise<HoldingInterface> {
        return this.holdingRepository.findOne(query);
    }

    public async updateByField(options, itemsToUpdate: any): Promise<HoldingInterface> {
        return this.holdingRepository.updateByField(options, itemsToUpdate);
    }
}

export default HoldingService;