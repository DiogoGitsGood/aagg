import newAccountView from "../views/newAccount-view.js";
import newAccountService from "../services/newAccount-service.js";


const externals = {};

externals.start = function() {
  newAccountView.render();

  $('form').submit(function(event) {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();
    const email = $('#email').val();
    const tribe = $('#tribe').val();
    newAccountService.createAccount(username, password);

    // Redirect to home page
    alert("yay");
    window.location.hash = '#/';
  });
};

export default externals;
