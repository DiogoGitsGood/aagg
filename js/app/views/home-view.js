const externals = {};



function renderSidebar(app) {
  console.log("render sidebar");
 $(`h1`).empty();
  $(`h1`).append(" Cool Browser Game Landing Page");
  app.append(`
    <div class="sidebar">
      <button id="create-account-btn">Create Account</button>
      <button id="login-btn">Login</button>
      <button id="rules-btn">See Rules</button>
      <button id="leaderboard-btn">Check Leaderboard</button>
    </div>
  `);
}

  function displayMotivationalPhrase(app) {
    const phraseArray = Object.values(phrases);
    const phrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
    
    console.log(phrase)
    app.append(`<p>"`+ phrase +`"</p>`);
  }
  


function renderCenter(app) {
  console.log("render center");
  app.append(`
    <div class="center">
      <img src="img/landing.jpg" style="margin-top:10px" alt="Cool Browser Game">
      <p>Welcome to Cool Browser Games! Play now and become the ultimate champion!</p>
    </div>
  `);
}


externals.render = function () {
  let app = $('#app').empty();

  renderSidebar(app);
  renderCenter(app);
  displayMotivationalPhrase(app)

};



const phrases = {
  1: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  2: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  3: "Believe you can and you're halfway there.",
  4: "You are never too old to set another goal or to dream a new dream.",
  5: "If you want to lift yourself up, lift up someone else.",
  6: "Strive not to be a success, but rather to be of value.",
  7: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  8: "I have not failed. I've just found 10,000 ways that won't work.",
  9: "It does not matter how slowly you go as long as you do not stop.",
  10: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  11: "Believe you can and you're halfway there.",
  12: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  13: "No one can make you feel inferior without your consent.",
  14: "You miss 100% of the shots you don't take.",
  15: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  16: "Your time is limited, don't waste it living someone else's life.",
  17: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  18: "The way to get started is to quit talking and begin doing.",
  19: "If you can dream it, you can achieve it.",
  20: "Don't watch the clock; do what it does. Keep going.",
  21: "I would rather die of passion than of boredom.",
  22: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  23: "Success usually comes to those who are too busy to be looking for it.",
  24: "The only limit to our realization of tomorrow will be our doubts of today.",
  25: "The best way to predict the future is to invent it.",
  26: "You can't build a reputation on what you are going to do.",
  27: "The future belongs to those who believe in the beauty of their dreams.",
  28: "It's not the years in your life that count. It's the life in your years.",
  29: "In the end, it's not the years in your life that count. It's the life in your years.",
  30: "Don't let yesterday take up too much of today."
};



export default externals;
