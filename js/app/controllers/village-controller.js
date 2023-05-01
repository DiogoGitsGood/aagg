import villageView from "../views/village-view.js";
import localService from "../services/local-service.js";
import gameService from "../services/game-service.js";
import dataService from "../services/data-service.js";
const externals = {};
externals.start = function(){
//surprisingly ok

const user = localStorage.getItem('user'); 
console.log(user)
villageView.render(user);

//setInterval(gameService.updateVillageResources, 10000); // 10000 milliseconds = 10 seconds
$('#up').on('click', update);
$('#logout-btn').on('click', logout);
}
function update(){
    gameService.updateVillageResources();
    externals.start();
}

function logout() {
    localStorage.removeItem('user');
    window.location.hash = '#/';
}

export default externals;