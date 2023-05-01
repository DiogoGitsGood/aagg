import dataService from "./data-service.js";

let externals = {};
const BUILDING_PRODUCTION_RATE = 30;

  
  
 externals.updateVillageResources = function() {
    const now = new Date();
    const user = JSON.parse(localStorage.getItem('user'));
    const village = user.village;
    
    // Calculate the time elapsed since the last update
    const lastUpdateTime = new Date(village.lastUpdateTime);
    const elapsedMs = now.getTime() - lastUpdateTime.getTime();
    const elapsedSeconds = elapsedMs / 1000;
    

    //tweak
    // Calculate the amount of resources produced by each building
    const productionRates = {
      farms: 1000,
      lumbers: 500,
      rockMines: 300,
      goldMines: 100,
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
    localStorage.setItem('user', JSON.stringify(user));
    dataService.updateUser(user.username, localStorage.getItem('user') );

  }
  


export default externals;