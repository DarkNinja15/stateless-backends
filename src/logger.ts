import { gameManager } from "./store";

export function logger(){
    setInterval(()=>{
        console.log(gameManager.games);
    },5000);
}