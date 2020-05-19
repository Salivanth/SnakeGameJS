/* Class representing the Food object that can be eaten for points and to extend the snake. */
import {Constants} from "./Constants";

export class Food {
    // Variable that determines how many px to move the food to center it inside the segment.
    CENTER_FOOD_IN_SEGMENT = (Constants.SEGMENT_SIZE - Constants.FOOD_SIZE) / 2;

    constructor() {
        this.pointValue = Constants.FOOD_POINT_VALUE;
        this.timeoutMillis = Constants.EARLIEST_FOOD_TIMEOUT_MS + Math.random() * (Constants.LATEST_FOOD_TIMEOUT_MS - Constants.EARLIEST_FOOD_TIMEOUT_MS);
        // Ensures the food doesn't clip off the edge of the map.
        this.startX = Math.floor(Math.random() * Constants.BOARD_SIZE_IN_SEGMENTS - 1) * Constants.SEGMENT_SIZE + this.CENTER_FOOD_IN_SEGMENT;
        this.startY = Math.floor(Math.random() * Constants.BOARD_SIZE_IN_SEGMENTS - 1) * Constants.SEGMENT_SIZE + this.CENTER_FOOD_IN_SEGMENT;
    }
}