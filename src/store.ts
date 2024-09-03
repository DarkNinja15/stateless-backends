export interface Game{
    id:string;
    whitePlayer:string;
    blackPlayer:string;
    moves:string[];
}
class GameManager{
    public games:Game[];
    constructor(){
        this.games=[];
    }

    public addMove(gameId:string,move:string){
        console.log("Adding move to game...");
        const game=this.games.find(game=>game.id==gameId);
        game?.moves.push(move);
    }

    public addGame(blackPlayer:string,whitePlayer:string){
        this.games.push({
            id:Math.random().toString(),
            blackPlayer,
            whitePlayer,
            moves:[]
        });
    }
}

export const games = new GameManager();