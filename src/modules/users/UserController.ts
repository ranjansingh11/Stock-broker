import WalletService from "../wallets/WalletService";
import UserService from "./UserService";

class UserController {

    private static userInstance;

    public static getUser() {
        if(!UserController.userInstance) {
            UserController.userInstance = new UserController();
        }
        return UserController.userInstance;
    }

    public create = async (req, res, next) => {
        try {
           const {name, email} = req.body;
           const userService: UserService = new UserService();
           const userExists = await userService.get({email});

           if(!userExists) {
               const walletService : WalletService = new WalletService(); 
               const user = await userService.create({
                   name, email
               });

               await walletService.create({user_id: email, funds : 0})
               res.send("Successfully created the user" + user);
           } else {
                res.send("User already exists ");
           }
           
        } catch (error) {
           next(error);
       }
   }
}

export default UserController.getUser();