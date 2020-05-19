/* Represents the Board object that the game takes place in. */
import {Constants} from "./Constants";

export class Board {
    boardSize;
    constructor() {
        this.boardSize = Constants.BOARD_SIZE;
    }

    // Used when a boundary is hit to reduce the play space.
    // TODO: Add logic to ensure that nothing clips into the smaller board.
    shrinkBoard() {
        this.boardSize = this.boardSize - Constants.BOARD_SHRINK_SIZE;
    }

    render() {

    }
}