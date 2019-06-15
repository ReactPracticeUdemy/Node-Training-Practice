export function validateEmail(users) {
  let myEmail = /@successive.tech\s*$/;

  return users.match(myEmail);
}
