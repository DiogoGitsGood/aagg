const externals = {};

//not nice fuck you 
externals.getAll = async function(){
    try {
      const configResponse = await fetch('../../../config.json');
      const config = await configResponse.json();
  
      const response = await fetch(`http://localhost:5984/coolgame/_all_docs?include_docs=true`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${config.couchdb.username}:${config.couchdb.password}`)
        }
      });
      const data = await response.json();
      const users = data.rows
        .filter(row => row.doc && row.doc.username !== undefined)
        .map(row => ({
          username: row.doc.username,
          tribe: row.doc.tribe,
          village: row.doc.village
        }));
  
      return users;
    } catch (error) {
      console.error(`Error getting all users: ${error}`);
      return false;
    }
  }
  externals.updateUser = async function(username, updatedData) {
    try {
      const configResponse = await fetch('../../../config.json');
      const config = await configResponse.json();
  
      const userResponse = await fetch(`http://localhost:5984/coolgame/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${config.couchdb.username}:${config.couchdb.password}`)
        }
      });
      const userData = await userResponse.json();
  
      const updatedUser = {
        ...userData,
        ...updatedData,
        village: {
          ...userData.village,
          ...updatedData.village,
          resources: {
            ...userData.village.resources,
            ...updatedData.village.resources
          },
          buildings: {
            ...userData.village.buildings,
            ...updatedData.village.buildings
          }
        }
      };
  
      const response = await fetch(`http://localhost:5984/coolgame/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${config.couchdb.username}:${config.couchdb.password}`)
        },
        body: JSON.stringify(updatedUser)
      });
  
      if (response.ok) {
        console.log('User updated successfully.');
        return true;
      } else if (response.status === 409) {
        const latestUserResponse = await fetch(`http://localhost:5984/coolgame/${username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${config.couchdb.username}:${config.couchdb.password}`)
          }
        });
        const latestUserData = await latestUserResponse.json();
        const mergedUser = {...latestUserData, ...updatedData};
        return await externals.updateUser(username, mergedUser);
      } else {
        console.error('Failed to update user.');
        return false;
      }
    } catch (error) {
      console.error(`Error updating user: ${error}`);
      return false;
    }
  };


  export default externals;
