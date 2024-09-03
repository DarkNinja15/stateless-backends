import { games } from "./store";
import { logger } from "./logger";

logger();

setInterval(()=>{
    games.push({
        id:Math.random().toString(),
        blackPlayer:"Alice",
        whitePlayer:"Bob",
        moves:[]
    });
},5000)