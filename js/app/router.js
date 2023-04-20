import homeController from "./controllers/home-controller.js";

/**
 * Router Module
 */
const externals = {}; // module external api

const routes = {
  home:{
    hash:"#home",
    controller:homeController
  }
  ,player:{
    hash:"#player",
    controller:"player-controller"
  }
  };

const defaultRoute = "home";

const hashCheck = () => {
  var routeName = Object.keys(routes).find(function (name) {
    return window.location.hash === routes[name].hash;
  });

  if (!routeName) {
    routeName = defaultRoute;
    window.location.hash = routes[defaultRoute].hash;
  }

  loadController(routes[routeName].controller);
};

const loadController = controller => {
  try {
    controller.start();
  } catch (err) {
    console.log(err.stack);
    window.location.hash = routes[defaultRoute].hash;
  }
};

externals.start = () => {
  hashCheck();

  $(window).on("hashchange", function () {
    console.log("Hash has changed.");
    hashCheck();
  });
};

export default externals;
