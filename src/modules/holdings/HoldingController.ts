import UserService from "../users/UserService";
import HoldingService from "./HoldingService";

class HoldingController {

    private static holdings;
    
    public static getHoldings() {
        if(!HoldingController.holdings) {
            this.holdings = new HoldingController();
        }
        return HoldingController.holdings;
    }

    public create = async (req, res, next) => {
        try {
            const {user_id, holdings} = req.body;
            const userService: UserService = new UserService();
            const userExists = await userService.get({email : user_id});
            if(!userExists) {
                res.send("User doesn't exists");
            }
            console.log("User Info :", userExists);
            const holdingService : HoldingService = new HoldingService();

            const newUserHoldings = (holdings) ? holdings : [];
            const previousUserHoldings = await holdingService.get({user_id});
            if (previousUserHoldings && previousUserHoldings.holdings.length) {
                const updatedHoldings = previousUserHoldings.holdings.concat(newUserHoldings);
                const updatedUserHoldings = await holdingService.updateByField({user_id}, {holdings: updatedHoldings});
                res.send("Successfully updated the holding : " + updatedUserHoldings);
            } else {
                const holding = await holdingService.create({
                    user_id, holdings: newUserHoldings
                });
                res.send("Successfully created the holding : " + holding);
            }
            
         } catch (error) {
            next(error);
        }
    }


    public fetch = async (req, res, next) => {
        try {
            const user_id = req.params.email;
            const holdingService : HoldingService = new HoldingService();
            const userHoldings = await holdingService.get({user_id})
            res.send("Current holdings of the user : " + userHoldings);
        } catch (error) {
            next(error);
        }
    }
}

export default HoldingController.getHoldings();