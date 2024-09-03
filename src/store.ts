export interface Game{
    id:string;
    whitePlayer:string;
    blackPlayer:string;
    moves:string[];
}
class GameManager{
    public games:Game[];
    private static instance:GameManager;
    private constructor(){
        this.games=[];
    }

    static getInstance():GameManager{
        if(this.instance){
            return this.instance;
        }
        this.instance=new GameManager();
        return this.instance;
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
export const gameManager = GameManager.getInstance();