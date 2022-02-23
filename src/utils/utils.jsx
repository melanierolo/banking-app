async function MatchUser({ email, password, ctx }) {
  return new Promise((resolve, reject) => {
    for (let i = 0; ctx.users.length > i; i++) {
      if (email === ctx.users[i].email && password === ctx.users[i].password) {
        setTimeout(() => {
          if (
            email === ctx.users[i].email &&
            password === ctx.users[i].password
          ) {
            resolve((ctx.users[i].isLoggedIn = true));
          } else {
            reject();
          }
        }, 3000);
      }
    }
  });
}

export default MatchUser;
