const NewAccountService = function() {
  const createAccount = function(username, password, email, tribe) {
    const user = {
      username: username,
      password: password,
      email: email,
      tribe: tribe
    };

    fetch('http://localhost:5984/coolgame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        console.log('Account created!');
      } else {
        console.log(`Error creating account: ${response.status}`);
      }
    })
    .catch(error => {
      console.error(`Error creating account: ${error}`);
    });
  };

  return {
    createAccount: createAccount
  };
};

export default new NewAccountService();
