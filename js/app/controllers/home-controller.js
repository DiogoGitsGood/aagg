import homeView from "../views/home-view.js";
import newAccountController from "./newAccount-controller.js";

const externals = {};

function createAccount() {
  console.log("create account");
  window.location.hash ="#newAccount";
}

externals.start = function () {
  homeView.render();

  $('#create-account-btn').on('click', createAccount);
};

export default externals;
