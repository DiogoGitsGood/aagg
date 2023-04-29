import localService from "./local-service.js";

const externals = {};


//nice
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
        localService.localSave('user', user);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(`Error logging in: ${error}`);
      return false;
    }
  }
  "Help me create a couchDB database, and some methods to get and update users. users should have usernames, password,  email, and tribe. the tribe object should have a village. the villages should have resources, that contain 1000 woobuildings, that contain  4 lumbers, 4 farms, 4 stoneMine, 4 goldMine."

  export default externals;