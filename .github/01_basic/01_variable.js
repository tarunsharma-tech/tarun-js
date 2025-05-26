const accountId = 1234567890;
let accountName = 'Tarun';
var accountEmail = 'tarun@google.com';   // var is function scoped but not block scoped
accountCity = 'New York';
let accountState;

// accountId= 2 ;
accountName = 'Tarun Sharma';
accountEmail = 676;
accountCity = 'New Delhi';
// we not allowed to change the value of accountId as it is a constant
// accountState = 'NY'; // let can be used to declare variables that can change later


console.log(accountId);
console.table([accountEmail, accountName, accountCity , accountState]); 
