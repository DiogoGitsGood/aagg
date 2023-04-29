import villageView from "../views/village-view.js";
import localService from "../services/local-service.js"
import gameService from "../services/game-service.js"

const externals = {};

externals.start = function(){
//surprisingly ok
villageView.render(localService.localLoad('user'));

//setInterval(gameService.updateVillageResources, 10000); // 10000 milliseconds = 10 seconds

$('#logout-btn').on('click', logout);
}

function logout() {
    localService.localDelete('user');
    window.location.hash = '#/';
}

export default externals;