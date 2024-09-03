import { gameManager } from "./store";
import { logger } from "./logger";

logger();

setInterval(()=>{
    gameManager.addGame("Alice","Bob");
},5000)