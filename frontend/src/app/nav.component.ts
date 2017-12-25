import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
  <mat-toolbar>My Quizz App
    <button mat-button routerLink="/">Quiz</button>
    <button mat-button routerLink="/question">Question</button>
    <button mat-button routerLink="/questions">Question List</button>
  </mat-toolbar>
  `

})
export class NavComponent {
}


    // <button mat-button routerLink="/">Quiz</button>
        // <button mat-button routerLink="/question">Question</button>
        // <button mat-button routerLink="/questions">Question List</button>