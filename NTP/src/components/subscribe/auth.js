// todo

// for token based login/logout
// baadme kar le

const login = (token, expirationDate) => {
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  };

export default login;