import villageView from "../views/village-view.js";
import newAccountService from "../services/newAccount-service.js";

const externals = {};

externals.start = function(){

villageView.render(newAccountService.getUserFromLocalStorage());
$('#logout-btn').on('click', logout);
}

function logout() {
    newAccountService.deleteUserFromLocalStorage();
    window.location.hash = '#/';
}

export default externals;