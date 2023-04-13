import homeview from "../views/home-view.js";

const externals= {};

externals.start = function(){
   //location.reload();
    homeview.render();
}

export default externals;