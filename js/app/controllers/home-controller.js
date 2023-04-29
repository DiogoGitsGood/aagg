import homeView from "../views/home-view.js";
import authService from "../services/auth-service.js";

const externals = {};

function createAccount() {
  console.log("create account");
  window.location.hash ="#newAccount";
}

function login() {
  console.log("login");
  const username = $("#username-input").val();
  const password = $("#password-input").val();

  authService.authenticateUser(username, password)
    .then((player) => {
      sessionStorage.setItem("player", JSON.stringify(player));
      window.location.hash = "#village";
    })
    .catch((error) => {
      console.log(error);
      alert("Invalid username or email.");
    });
}

externals.start = function () {
  homeView.render();

  $('#create-account-btn').on('click', createAccount);
  $('#login-form').on('submit', function (event) {
    event.preventDefault();
    login();
  });
};
export default externals;