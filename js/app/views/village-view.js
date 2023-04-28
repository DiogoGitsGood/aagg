
const externals = {};

function renderSidebar(app, username) {
    $(`h1`).empty();
    $(`h1`).append(" Village View");
    app.append(`
      <div class="sidebar">
        <p>Player: ${username}</p>
        <button id="logout-btn">Logout</button>
      </div>
    `);
    
  const backButton = $('#logout-btn').text('Back to Home');
  backButton.on('click', function() {
    window.location.hash = '#/';
  });
  }
  
  function renderCenter(app, buildings, resources) {
    let buildingsHTML = '';
    for (let building in buildings) {
      buildingsHTML += `<li>${building}: ${buildings[building]}</li>`;
    }
  
    let resourcesHTML = '';
    for (let resource in resources) {
      resourcesHTML += `<li>${resource}: ${resources[resource]}</li>`;
    }
  
    app.append(`
      <div class="center">
        <h2>Buildings:</h2>
        <ul>${buildingsHTML}</ul>
  
        <h2>Resources:</h2>
        <ul>${resourcesHTML}</ul>
      </div>
    `);
  }
  
  externals.render = function (userin) {

    console.log(userin)
    let app = $('#app').empty();
  
  
    if (!userin) {
      // Handle case when user is not logged in
      app.append(`
        <div class="center">
          <p>Please login to access this page</p>
        </div>
      `);
      return;
    }
  
    renderSidebar(app, userin.username);
    renderCenter(app, userin.village.buildings, userin.village.resources);
  };
  

export default externals;