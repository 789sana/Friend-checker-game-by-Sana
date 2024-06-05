#! /usr/bin/env node

// friend checker game

import inquirer from "inquirer";

let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message:"Enter Your Friend name"
}]);
if (isFriend.name === "Areesha" || isFriend.name ==="Ayesha"){
    console.log(`${isFriend.name} is your friend.`);
}else{
    console.log(`${isFriend.name} is not your friend.`);
}
