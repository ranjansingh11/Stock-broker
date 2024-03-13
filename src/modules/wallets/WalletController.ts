import { nextTick } from "process";
import WalletService from "./WalletService";

class WalletController {
    private static walletInstance;

    public static getWallet() {
        if(!WalletController.walletInstance) {
            WalletController.walletInstance = new WalletController();
        }
        return WalletController.walletInstance;
    }

    public get = async (req, res, next) => {
        try {
            const {user_id} = req.body;
            const walletService : WalletService = new WalletService();
            const funds = await walletService.get({user_id});
            res.send("Available funds " + funds);
        } catch (error) {
            res.send("Issue while fetching fund details for the user");
        }
    }

    public create = async (req, res, next) => {
        try {
            const {user_id, funds} = req.body;
            const walletService : WalletService = new WalletService();
            const existingFunds = (await walletService.get({user_id})).funds;
            const wallet = await walletService.updateByField({user_id}, {funds : (funds + existingFunds)});
            res.send(`User : `+user_id + ` reacharged with funds` + wallet)
        } catch (error) {
            res.send("Issue while adding funds to the account ");
        }
    }
}

export default WalletController.getWallet();