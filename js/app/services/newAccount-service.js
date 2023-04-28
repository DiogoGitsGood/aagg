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

  externals.authenticateUser = async function(username, password) {
    try {
      const configResponse = await fetch('../../../config.json');
      const config = await configResponse.json();

      const response = await fetch(`http://localhost:5984/coolgame/_design/by_username_password/_view/by_username_password?key=["${username}", "${password}"]&include_docs=true`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${config.couchdb.username}:${config.couchdb.password}`)
        }
      });
      const data = await response.json();
      const user = {
        username: data.rows[0].value.username,
        tribe: data.rows[0].value.tribe,
        village: data.rows[0].value.village
      };
     
      
      if (data.rows.length > 0) {
       saveUserToLocalStorage(user); 
       window.location.hash ="#village";
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Error logging in: ${error}`);
      return false;
    }
  }
    


function saveUserToLocalStorage(data) {
  localStorage.setItem('user', JSON.stringify(data));
}

externals.getUserFromLocalStorage = function() {
  const user = JSON.parse(localStorage.getItem('user'));
 
  if (!user) {
    return null;
  }

  return user;
}



externals.getPlayer = function (){
  return user;
}
export default externals;
