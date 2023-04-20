
let key = "";
let players = [];
const rio = "https://euw1.api.riotgames.com";


externals.getPPUID = async function(suname){
let newPlayer;

await fetch(rio+"/lol/summoner/v4/summoners/by-name/" + suname +key)
.then((response) => response.json())
.then(function (response){response.data.map(function(element){
    console.log(element)
    newPlayer = { 
    name: element.name,
    id : element.puuid, 
    icon : element.profileIconId,
    level :element.summonerLevel}
});});
players.push(newPlayer);
console.log(newPlayer);
}
 
 
/**
 * 
 {
    "id": "zIa7Fga_ZYIzPMnjEMH2ktnR-OBYfd_zj5des5O1Rln_IAqe",
    "accountId": "UADxQH4XWrYA8TbiIPuwxWbBCOLvCOyvlXXj5lBlGQ7v7lYl4IeDIxsD",
    "puuid": "NM5pSz0amyhV-h_mqR7cuS6QYQIUk-w0hSNNxzyCW_2-YNuehhKVSCGIehhM-wQpLBT9Au5YEoyYfw",
    "name": "Esparguetes",
    "profileIconId": 1152,
    "revisionDate": 1681422173203,
    "summonerLevel": 349
}
 */


async function getMatch(matchId){
await fetch (rio+`lol/match/v5/matches/${matchId}`)
.then((response) => response.json())
.then(function(response){response.data.map(function(element){
    history ={}  }
)}
)
}

/**
[
    "EUW1_6359541266",
    "EUW1_6359336725",
    "EUW1_6358296866",
    "EUW1_6358240670",
    "EUW1_6355510605",
    "EUW1_6355464012",
    "EUW1_6354114113",
    "EUW1_6354086991",
    "EUW1_6354012016",
    "EUW1_6354006650",
    "EUW1_6353921273",
    "EUW1_6353866642",
    "EUW1_6353207349",
    "EUW1_6352140692",
    "EUW1_6352074681",
    "EUW1_6351999379",
    "EUW1_6351786924",
    "EUW1_6351740090",
    "EUW1_6351705807",
    "EUW1_6351588546"
] */










/**


 */




export default externals;