/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus){

    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function(){
    return this.attackBonus+2;
};

Pokemon.prototype.isDefeated = function(){
if (this.health >= 1){
    return false;
} else {
    return true;
}

};

function simulateBattle(playerOne, playerTwo, firstMove){
    
    console.log(playerTwo.name);

    while(!playerOne.isDefeated() && !playerTwo.isDefeated()){
        if (playerOne.name === firstMove){

            playerTwo.health -= playerOne.biteAttack();
            console.log(playerTwo.name + "= " + playerTwo.health);
            if (playerTwo.isDefeated()){
                console.log(`${playerOne.name} Wins!`);
                return `${playerOne.name} Wins!`;
                
            }
            
            playerOne.health -= playerTwo.biteAttack();
            console.log(playerOne.name + "= " + playerOne.health);
            
            if (playerOne.isDefeated()){
                return `${playerTwo.name} Wins!`;
            }

        } else{
            playerOne.health -= playerTwo.biteAttack();
            console.log(playerOne.health);
            console.log(playerOne.name + "= " + playerOne.health);
            if (playerOne.isDefeated()){
                return `${playerTwo.name} Wins!`;
            }
            playerTwo.health -= playerOne.biteAttack();
            console.log(playerTwo.name + "= " + playerTwo.health);
            if (playerTwo.isDefeated()){
                return `${playerOne.name} Wins!`;
            }
        }
    //}

    }
    //return "hi";
   
   
    if (playerTwo.isDefeated()){
        console.log(`${playerOne.name} Wins!`);
        return `${playerOne.name} Wins!`;
        
    } else {

        return `${playerTwo.name} Wins!`;
    }
    

}


let krabby = new Pokemon('Krabby', 400, 5);
let squirtle = new Pokemon('Squirtle', 600, 2);

simulateBattle(krabby, squirtle, 'Krabby')

let pikachu = new Pokemon('Pikachu', 250, 4);
let charizard = new Pokemon('Charizard', 300, 5);

simulateBattle(pikachu, charizard, 'Pikachu')

