const accountId = 144553
let accountEmail = "pallavipallavi65891@gmail.com"
var accountPassword = "12345" // it is not used now-a-days due to blockScope and functionScope problem
accountCity = "Hyderabad"
accountEmail = "pallavipatil65891@gmail.com"
accountPassword = "1234567890"
accountCity = "Maharastra"
let accountState; //value not defined yet so if we try to print it it will provide output as undefined

// accountId = 2 //not allowed , constants cannot be changed
console.log(accountId);
console.table([accountId,accountCity,accountEmail,accountPassword,accountState])
