const externals = {};



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
        farms: 4,
        lumbers: 4,
        rockMines: 3,
        goldMines: 3,
      },
    },
        };
        
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


 externals.validateUsernameAndPassword = async function(username, password) {
  try {
    const response = await fetch(`http://localhost:5984/coolgame/_design/coolgame/_view/by_username_password?key=["${username}", "${password}"]`);
    const data = await response.json();

    if (data.rows.length > 0) {
      const user = data.rows[0].value;
      console.log(`Logged in as ${user.username}!`);
    } else {
      console.error(`Invalid username or password!`);
    }
  } catch (error) {
    console.error(`Error logging in: ${error}`);
  }
}
 


export default externals;
