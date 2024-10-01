const accountId = 12345 ;
let accountEmail = "abc@mail.com";
var accountPassword = "12345";
accountCity = "abcd"; //not recommended

let accountState; // if printed it will display undefined

// accountID = 234; // not allowed

accountEmail = "pqr@mail.com";
accountPassword = "11111";
accountCity = "pqrs";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// It gives all the variable in tabular structure

/*
Not use Var
because of issues in block scope and functional scope
Let: an only be used inside the scope. It is blocked-scope
*/
