import UserInterface from "./UserInterface";
import UserRepository from "./UserRepository";

class UserService {

    private userRepository : UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async create(query): Promise<UserInterface> {
        return this.userRepository.create(query);
    }

    public async get(query): Promise<UserInterface> {
        return this.userRepository.findOne(query);
    }
}

export default UserService;