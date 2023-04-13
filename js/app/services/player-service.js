
let key = "RGAPI-8c143b88-d29a-468d-b1bd-19f063eabac5";
let players = [];



externals.getPPUID = async function(suname){
let newPlayer;

await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + suname +key)
.then((response) => response.json())
.then(function (response){response.data.map(function(element){
    console.log(element)
    newPlayer = { 
name: element.name,
id : element.id, 
icon : element.icon}
});});
players.push(newPlayer);
}
 
 
 
 async function getMatch(ppuid){

}

export default externals;