async function MatchUser({ email, password, ctx }) {
  for (let i = 0; ctx.users.length > i; i++) {
    if (email === ctx.users[i].email && password === ctx.users[i].password)
      return new Promise((resolve, reject) => {
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
      });
  }
}

export default MatchUser;
