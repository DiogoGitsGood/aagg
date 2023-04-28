import villageView from "../views/village-view.js";
import newAccountService from "../services/newAccount-service.js";

const externals = {};

externals.start = function(){

villageView.render(newAccountService.getUserFromLocalStorage());

}



export default externals;