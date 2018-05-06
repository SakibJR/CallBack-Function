
//Callback funciton is when we pass an function as an argument in another function 

var userName = [
    'sakib', 'Zannat', 'Anything'
]

//Print is a callback function
let print = function(){
    console.log(userName);
}

//We pass print() function as an argument
function addUserName(Name, print){
    userName.push(Name);
    print();
}
    
//Here we use the callback function
addUserName('newName', print);
addUserName('AnotherNewName', print);

/*------------------------output--------------------------------
--> //userName = ['sakib', 'Zannat', 'Anything', 'newName']
--> //userName = ['sakib', 'Zannat', 'Anything', 'newName', 'AnotherNewName']