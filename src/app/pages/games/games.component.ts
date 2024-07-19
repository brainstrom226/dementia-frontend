import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  guess: any ;
  message: string = '';
  targetNumber: number = 0;

  score: number = 0;
  isGameActive: boolean = false;
  gameDuration: number = 10; // Game duration in seconds


  constructor() {
    this.resetGame();
  }

  resetGame(): void {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = null;
    this.message = '';
  }

  checkGuess(): void {
    if (this.guess < this.targetNumber) {
      this.message = 'Too low!';
    } else if (this.guess > this.targetNumber) {
      this.message = 'Too high!';
    } else {
      this.message = 'Correct! You win!';
    }
  }
  clickButton(): void {
    if (this.isGameActive) {
      this.score++;
    }
  }
  startGame(): void {
    this.score = 0;
    this.isGameActive = true;

    setTimeout(() => {
      this.isGameActive = false;
    }, this.gameDuration * 1000);
  }
}
