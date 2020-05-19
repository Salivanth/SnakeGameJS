/* Represents the Board object that the game takes place in. */
import {Constants} from "./Constants";

export class Board {
    boardSize;
    constructor() {
        this.boardSize = Constants.BOARD_SIZE;
    }

    shrinkBoard() {
        this.boardSize = this.boardSize - Constants.BOARD_SHRINK_SIZE;
    }

    render() {

    }
}