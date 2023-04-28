import newAccountService from "./newAccount-service.js";

let externals = {};
const BUILDING_INTERVAL_MS = 30000;

const BUILDING_PRODUCTION_RATE = 30;

externals.updateResourcesForUser = async function() {
    const users = await newAccountService.getAll();
 
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
      await newAccountService.updateUser(user.username, { village });
    }   
  }
  



export default externals;