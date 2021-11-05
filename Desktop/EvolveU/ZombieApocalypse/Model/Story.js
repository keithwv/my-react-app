// Player object to keep track of player progress and eventually save to a database
let player = {
    Food_Level: 20,
    Weapon:["", "", ""],
    Health: 100,
    Current_Scene: "start",
};

// Display this message below each scene so user knows their status


// Endpoint for stay Decision
function stay() {
    player.Current_Scene = "stay";
    player.Health = 0;
    stats =  player_status();

    message = `No one comes to help you and you starve to death. Game Over!! <br>
               Go back the following endpoint localhost:3000/start to play again<br><br>
               ${stats}`
               
    return message;
}


function Superstore() {
    player.Current_Scene = "Superstore"
    player.Food_Level =100;
    Food_Level = player.Food_Level;
    stats = player_status();
    
    message = `You go to superstore and pick up some food. Your food levels are now ${Food_Level} <br>
                Decision 1: Go back to the library-localhost:3000/Library <br>
                Decision 2: Search for weapons in the nearby hardware store local-localhost:3000/Hardware_Store<br><br>
                ${stats}`

    return message;
}

function Library() {
    player.Current_Scene = "Library"
    player.Health = 0
    stats = player_status()

    message = `You are attacked by zombies they have surrounded you and you no means of escaping. Game Over!!.<br>
    Go back the following endpoint localhost:3000/start to play again<br><br>
    ${stats}`

    return message
}

function Hardware_Store() {
    player.Current_Scene = "Hardware_Store"
    player.Weapon[0] = "baseball bat"
    stats = player_status()
    message = `You make it to the hardware store and find a baseball bat<br>
               Decision 1: Leave to go back to Library - localhost:3000/Leave<br>
               Decision 2: Search for more weapons - localhost:3000/Search<br><br>
               ${stats}`
    return message
}

function Search() {
    player.Current_Scene = "Search"
    stats = player_status()
    message = `You find a shotgun with 6 shells and a crossbow with 20 arrows.<br>
    you only room for one more in your inventory<br>Decision 1: Choose Shotgun - localhost:3000/Shotgun<br>
    Decision 2: Crossbow - localhost:3000/Crossbow<br><br>${stats}`
    return message
}

function Shotgun() {
    player.Current_Scence = "Shotgun"
    player.Weapon[1] = "Shotgun"
    stats = player_status()
    message = `You choose the Shotgun<br>
              Now you go back to library - localhost:3000/Library2<br><br>
              ${stats}`
    return message
}

function Leave() {
    player.Current_Scene = "Leave"
    player.Health = 0
    stats = player_status()
    message = `Zombies attack but baseball bat you have is insufficient to save you<br>
               You die Go back the following endpoint localhost:3000/start to play again<br><br>
               ${stats}`
    return message
}

function Crossbow() {
    player.Current_Scene = "Crossbow"
    player.Weapon[1] = "Crossbow"
    stats = player_status()
    message = `You choose Crossbow<br>Now you go back to library - localhost:3000/Library2<br><br>${stats}`
    return message
}

// function Library2() {
//     player.Current_Scene = "Library2"
//     stats = player_status()
//     if (player.Weapon[1] == "Crossbow") {
//         message = `Zombies Attack<br>Decision 1 Use you Baseball Bat<br>Decision 2 Use your Crossbow`
//     } 
//     if (player.Weapon[1] == "Shotgun") {
//         message = `Zombies Attack<br>Decision 1 Use you Baseball Bat<br>Decision 2 Use your Crossbow`
//     }
// }

//Your Food Level will deplete by 10 points every time you change a scene
function Food_Level() {
    player.Food_Level -= 10
}

function player_status() {
    message =  `Player Stats:<br>
                Food Level: ${player.Food_Level}<br>
                Weapons: ${player.Weapon}<br>
                Health: ${player.Health}<br>
                Current_Scene = ${player.Current_Scene}`
    return message
}

module.exports = {stay, Superstore, player, Library, Hardware_Store,Food_Level,Hardware_Store, Leave, Search, Shotgun, Crossbow}