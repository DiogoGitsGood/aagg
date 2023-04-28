
const NewAccountService = function() {
  const createAccount = function(username, password, email, tribe) {
    const user = {
      username: username,
      password: password,
      email: email,
      tribe: tribe
    };

    const postData = JSON.stringify(user);

    const options = {
      hostname: 'localhost',
      port: 5984,
      path: '/coolgame',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    const req = http.request(options, (res) => {
      if (res.statusCode === 201) {
        console.log('Account created!');
      } else {
        console.log(`Error creating account: ${res.statusCode}`);
      }
    });

    req.on('error', (error) => {
      console.error(`Error creating account: ${error}`);
    });

    req.write(postData);
    req.end();
  };

  return {
    createAccount: createAccount
  };
};

export default new NewAccountService();