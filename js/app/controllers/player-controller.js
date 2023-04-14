import playerView from "../views/player-view.js";
import playerService from "../services/player-service.js";

const externals = {};

externals.start = function(sumname){
playerService.getPPUID(sumname, function(){
   playerView.render() 
});}



export default externals;