/* Class that runs the main game loop code. */

import { Snake } from './Snake.js';
import { Food } from './Food.js';
import { Board } from './Board.js';
class Main {

    points = 0;

    startNewGameLoop() {
        this.renderGameLoop(new Board(), new Snake(), new Food())
    }

    endGameLoop() {
        // TODO: End game loop.
    }

    progressGameLoop(board, snake, food) {
        let direction = this.getDirectionFromKeystroke(snake);
        snake.moveSnake(direction);
        let collisionEntity = this.getCollision(board, snake, food);
        // Move snake based on keystroke given by user.
        this.handleCollision(collisionEntity, board, snake);
        this.renderGameLoop(board, snake, food);
    }

    renderGameLoop(board, snake, food) {
        board.render();
        snake.render();
        food.render();
    }

    // TODO: Get keystroke from user, translate to Direction.
    getDirectionFromKeystroke(snake) {
        return snake.direction;
    }

    getCollision(board, snake, food) {
        if (snake.startX <= 0 || snake.startY <= 0 || snake.startX >= board.boardSize || snake.startY >= board.boardSize) {
            return CollisionEntity.BOUNDARY;
        }
        if (snake.didCollideWithSelf()) {
            return CollisionEntity.SNAKE;
        }
        if (snake.didCollide(food)) {
            return CollisionEntity.FOOD;
        }
        return CollisionEntity.NOTHING;
    }

    handleCollision(collisionEntity, board, snake, food) {
        switch(collisionEntity) {
            case CollisionEntity.BOUNDARY:
                board.shrinkBoard();
                snake.reverseSnake();
                snake.removeEndOfSnake();
                break;
            case CollisionEntity.FOOD:
                this.points += food.pointValue;
                break;
            case CollisionEntity.NOTHING:
                snake.removeEndOfSnake();
                break;
            case CollisionEntity.SNAKE:
                this.endGameLoop();
                break;
        }
    }
}