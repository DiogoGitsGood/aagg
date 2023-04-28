import router from "./router.js"
import gameService from "./services/game-service.js"

router.start();
setTimeout(gameService.updateResourcesForUser, 30000);