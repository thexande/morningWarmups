var phoneValid = (phone) => {
  return phone.length === 10
}
var emailValid = (email) => {
  return email.indexOf('@') != -1
}
var userValid = (user) => {
  return user.length >= 5
}
var validateInput = (phone, email, user) => {
  var message = []
  phoneValid(phone) ? message.push("PN Valid") : message.push("PN invalid")
  emailValid(email) ? message.push("Email Valid") : message.push("Email invalid")
  userValid(user) ? message.push("User Valid") : message.push("User invalid")
  return message
}
console.log(validateInput("111111", "alex", "ck"));
console.log(validateInput("1234567890", "alex@gmail.com", "thexande"));
console.log(validateInput("1234567890", "alex!gmail.com", "thexande"));
