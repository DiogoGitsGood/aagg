const externals = {};


//super nice
  externals.createAccount = function(username, password, email, tribe) {
    fetch('../../../config.json')
      .then(response => response.json())
      .then(config => {
        const user = {
          username: username,
          password: password,
          email: email,
          tribe, 
    village: {
      resources: {
        wheat: 1000,
        wood: 1000,
        stone: 500,
        gold: 500,
      },
      buildings: {
        farms: {
          level: 1,
          productionRate: 10 // produce 10 wheat per hour
        },
        lumbers: {
          level: 1,
          productionRate: 5 // produce 5 wood per hour
        },
        rockMines: {
          level: 1,
          productionRate: 2 // produce 2 stone per hour
        },
        goldMines: {
          level: 1,
          productionRate: 1 // produce 1 gold per hour
        }},lastUpdateTime: new Date()}};
      
      const postData = JSON.stringify(user);
      const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${config.couchdb.username}:${config.couchdb.password}`)
          },
          body: postData
        };
        
        fetch('http://localhost:5984/coolgame', options)
          .then(response => {
            if (response.status === 201) {
              console.log('Account created!');
            } else {
              console.log(`Error creating account: ${response.status}`);
            }
          })
          .catch(error => {
            console.error(`Error creating account: ${error}`);
          });
      })
      .catch(error => {
        console.error(`Error loading config: ${error}`);
      });
  };




export default externals;
