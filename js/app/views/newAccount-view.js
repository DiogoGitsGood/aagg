import newAccountController from "../controllers/newAccount-controller.js";
const externals = {};

function renderNewAccountForm(app) {
    $(`h1`).empty();
    $(`h1`).append("Wow create an account, good choice buddy.");
    const form = $('<form>').submit(function(event) {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();
    const email = $('#email').val();
    const tribe = $('input[name=tribe]:checked').val();

    // Redirect to home page
    window.location.hash = '#/';
  });

  const usernameInput = $('<input>').attr('id', 'username').attr('type', 'text').attr('placeholder', 'Username').attr('required', true);
  const passwordInput = $('<input>').attr('id', 'password').attr('type', 'password').attr('placeholder', 'Password').attr('required', true);
  const emailInput = $('<input>').attr('id', 'email').attr('type', 'email').attr('placeholder', 'Email').attr('required', true);

  const humansDescription = "Humans are a proud race of warriors who value strength and honor above all else. They are known for their exceptional swordsmanship and their powerful war cry.";
  const orcsDescription = "Orcs are a fierce and brutal race that lives for battle. They are known for their ferocity in combat and their ability to take on much larger opponents.";
  const tribeSelection = $('<div>').addClass('tribe-selection').append(
    $('<div>').addClass('tribe-description').text('Choose your tribe:'),
    $('<label>').append(
      $('<input>').attr('type', 'radio').attr('name', 'tribe').val('humans').prop('checked', true),
      $('<span>').text('Humans'),
      $('<div>').addClass('tribe-info').text(humansDescription),
    ),
    $('<label>').append(
      $('<input>').attr('type', 'radio').attr('name', 'tribe').val('orcs'),
      $('<span>').text('Orcs'),
      $('<div>').addClass('tribe-info').text(orcsDescription),
    ),
    $('<label>').append(
      $('<input>').attr('type', 'radio').attr('name', 'tribe').val('elves'),
      $('<span>').text('Elves'),
      $('<div>').addClass('tribe-info').text('Elves are a graceful and wise race that values harmony with nature. They are known for their archery and their ability to move silently through the forest.'),
    ),
  );

  const submitButton = $('<button>').attr('type', 'submit').text('Create Account');

  form.append(usernameInput);
  form.append(passwordInput);
  form.append(emailInput);
  form.append(tribeSelection);
  form.append(submitButton);

  app.append(form);
  const backButton = $('<button>').text('Back to Home');
  backButton.on('click', function() {
    window.location.hash = '#/';
  });
  app.append(backButton);
}

externals.render = function() {
  let app = $('#app').empty();

  renderNewAccountForm(app);
};

export default externals;





