const accountId = 144553
let accountEmail = "avadhut@google.com"
var accountPassword = "12345"
accountCity = "Kolhapur"
let accountState;

// accountId= 2  //Not allowed
accountEmail= "hc@hc.com"
accountPassword = "21112"
accountCity = "Pune"


console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

// Please not to use var becz of issue in block scope and funtional scope