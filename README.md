# Memory Game

![Angular](https://img.shields.io/badge/Angular-v15%2B-red)
![TypeScript](https://img.shields.io/badge/TypeScript-v4-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Under%20Development-orange)

## Project Overview
The Memory Game is a classic memory challenge where players must replicate a sequence of colors displayed on the screen. With each level, the sequence grows longer and more challenging. This interactive application is built using Angular.

## How to Play
1. **Start the Game**:
   - Click the **Start** button to begin.
   - A sequence of two colors will be displayed for 15 seconds. Each color will flash briefly.

2. **Reproduce the Sequence**:
   - After 15 seconds, buttons representing the colors reappear.
   - A timer indicates how long you have to reproduce the sequence.
   - Click the buttons in the correct order.

3. **Validate or Reset**:
   - Click **Validate** to submit your answer.
   - Click **Reset** to start over.

4. **Score Calculation**:
   - Scores are based on accuracy and speed.
   - Each correct sequence advances you to the next level, adding one color to the sequence.
   - Errors end the game and display your final score.

5. **Progression**:
   - Sequences grow more complex as you progress.

6. **Game Over**:
   - A wrong choice ends the game. Your final score and a restart option will be displayed.

## Project Objectives

- **Application Structure**:
  - Use Angular modules for a well-organized codebase.
  - Decompose the app into components:
    - **Game Component**: Manages gameplay logic and user interaction.
    - **Interface Component**: Displays color buttons and game state.
    - **Score/Status Component**: Shows score, level, and game status.

- **Game Logic**:
  - Generate random color sequences.
  - Display sequences with visual feedback.
  - Validate user input.
  - Manage errors and scores.

- **Animations**:
  - Use `@angular/animations` for interactive feedback.
  - Animate button flashes and user interactions.

- **State Management**:
  - Create a service to handle game logic and state.
  - Implement methods:
    - `genererSequence()`: Generates a random sequence.
    - `ajouterCouleur()`: Adds a new color to the sequence.
    - `verifierReponse()`: Validates user input.
    - `resetGame()`: Resets the game state.

## Features

- Dynamic sequences that grow with each level.
- Visual feedback and animations.
- User-friendly interface.
- Real-time score tracking.
- Angular services for logic and state management.

## Technologies Used

- **Framework**: Angular 15+
- **Language**: TypeScript
- **Animations**: `@angular/animations`
- **Styling**: HTML5 / CSS3
- **Build Tool**: Angular CLI

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/memory-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd memory-game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

5. Open your browser and visit:
   ```
   http://localhost:4200
   ```

## Project Structure

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── game/
│   │   ├── interface/
│   │   ├── score-status/
│   ├── services/
│   │   ├── game.service.ts
│   ├── app.module.ts
├── assets/
├── environments/
├── main.ts
```

## Future Enhancements

- Add difficulty levels.
- Include sound effects for interactions.
- Implement leaderboard functionality.
- Optimize for mobile devices.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Built using Angular and TypeScript, inspired by the classic memory game.

---

**Happy Coding!**
