import { games } from "./store";
import { logger } from "./logger";

logger();

setInterval(()=>{
    games.addGame("Alice","Bob");
},5000)