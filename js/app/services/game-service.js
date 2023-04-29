import dataService from "./data-service.js";

let externals = {};
const BUILDING_PRODUCTION_RATE = 30;

//this is ok
externals.updateResourcesForUser = async function() {
    const users = await dataService.getAll();
 
    for (let i = 0; i < users.length; i++) {
 
      const user = users[i];  
      const village = user.village;
  
      // Update wheat count based on number of farms
      const wheatProduction = BUILDING_PRODUCTION_RATE * village.buildings.farms;
      village.resources.wheat += wheatProduction;
  
      // Update wood count based on number of lumbers
      const woodProduction = BUILDING_PRODUCTION_RATE * village.buildings.lumbers;
      village.resources.wood += woodProduction;
  
      // Update stone count based on number of rockMines
      const stoneProduction = BUILDING_PRODUCTION_RATE * village.buildings.rockMines;
      village.resources.stone += stoneProduction;
  
      // Update gold count based on number of goldMines
      const goldProduction = BUILDING_PRODUCTION_RATE * village.buildings.goldMines;
      village.resources.gold += goldProduction;
  
      // Update village on database
      await dataService.updateUser(user.username, { village });
    }   
  }
  
 externals.updateVillageResources = function() {
    const now = new Date();
    const village = JSON.parse(localStorage.getItem('user'));
    console.log(village);
    // Calculate the time elapsed since the last update
    const lastUpdateTime = new Date(village.lastUpdateTime);
    const elapsedMs = now.getTime() - lastUpdateTime.getTime();
    const elapsedSeconds = elapsedMs / 1000;
    
    // Calculate the amount of resources produced by each building
    const productionRates = {
      farms: 10,
      lumbers: 5,
      rockMines: 3,
      goldMines: 2,
    };
    const resourcesProduced = {
      wheat: village.buildings.farms * productionRates.farms * elapsedSeconds,
      wood: village.buildings.lumbers * productionRates.lumbers * elapsedSeconds,
      stone: village.buildings.rockMines * productionRates.rockMines * elapsedSeconds,
      gold: village.buildings.goldMines * productionRates.goldMines * elapsedSeconds,
    };
    
    // Update the village resources
    for (const resource in resourcesProduced) {
      village.resources[resource] += resourcesProduced[resource];
    }
    
    // Update the last update time
    village.lastUpdateTime = now.toISOString();
    
    // Save the updated village object to local storage
    localStorage.setItem('village', JSON.stringify(village));
    dataService.updateUser(localStorage.getItem('user').username, localStorage.getItem('user') )
  }
  


export default externals;