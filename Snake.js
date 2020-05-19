/* Class representing the Snake object, represented by a list of Segment objects. */
import { Constants } from './Constants.js';
import { Segment } from './Segment.js';

export class Snake {

    constructor() {
        this.segments = [];
        this.direction = Direction.NONE;
    }

    // Create a new one-segment snake in a random spot, but not within 5 segments of the edge of the map.
    createNewSnake() {
        let startX = (Math.floor(Math.random() * Constants.BOARD_SIZE_IN_SEGMENTS_WITHOUT_EDGE) * Constants.SEGMENT_SIZE) + Constants.EDGE_OF_BOARD_IN_PX;
        let startY = (Math.floor(Math.random() * Constants.BOARD_SIZE_IN_SEGMENTS_WITHOUT_EDGE) * Constants.SEGMENT_SIZE) + Constants.EDGE_OF_BOARD_IN_PX;
        this.segments = [new Segment(startX, startY)];
        this.direction = Direction.NONE;
    }

    // Add a new segment to the snake in a given direction. Used in conjunction with removeEndOfSnake() to move the snake.
    moveSnake(direction) {
        this.direction = direction;
        let currentHead = this.segments[0];
        let newHead = this.getNewHead(currentHead, direction);
        this.segments = newHead + this.segments;
    }

    // Remove the end of the snake. Used if the snake did not collide with food, so the snake remains the same size.
    removeEndOfSnake() {
        this.segments.pop();
    }

    // Reverse the direction and head of the snake. Performed if the snake hits a boundary.
    reverseSnake() {
        this.segments = this.segments.reverse();
        this.direction = this.reverseDirection();
    }

    reverseDirection() {
        switch(this.direction) {
            case Direction.UP:
                return Direction.DOWN;
            case Direction.DOWN:
                return Direction.UP;
            case Direction.LEFT:
                return Direction.RIGHT;
            case Direction.RIGHT:
                return Direction.LEFT;
        }
    }

    // Get the head of the new snake.
    getNewHead(currentHead) {
        switch (this.direction) {
            case Direction.NONE:
                return currentHead;
            case Direction.UP:
                return new Segment(currentHead.startX, currentHead.startY - Constants.SEGMENT_SIZE);
            case Direction.DOWN:
                return new Segment(currentHead.startX, currentHead.startY + Constants.SEGMENT_SIZE);
            case Direction.LEFT:
                return new Segment(currentHead.startX - Constants.SEGMENT_SIZE, currentHead.startY);
            case Direction.RIGHT:
                return new Segment(currentHead.startX + Constants.SEGMENT_SIZE, currentHead.startY);
        }
    }

    // TODO: Add collision detection logic. For each segment, check to see if a collision has occurred with the head.
    didCollideWithSelf() {
        return false;
    }

    didCollide(food) {
        let currentHead = this.segments[0];
        let headMaxX = currentHead.x + Constants.SEGMENT_SIZE;
        let headMaxY = currentHead.y + Constants.SEGMENT_SIZE;

        let foodMaxX = food.x + Constants.FOOD_SIZE;
        let foodMaxY = food.y + Constants.FOOD_SIZE;

        // We check to see if the max and min values of food collide with the current head of the snake.
        // If both are false, we know no area in between is also colliding with the snake, and return false.
        return (food.x > currentHead.x && food.x < headMaxX) || (food.y > currentHead.y && food.y < headMaxY) ||
            (foodMaxX > currentHead.x && foodMaxX < headMaxX) || (foodMaxY > currentHead.y && foodMaxY < headMaxY);
    }

    render() {

    }
}