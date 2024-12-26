import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../../core/services/game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  sequence: string[] = []; // Stocke la séquence générée

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    // Initialisez la séquence dès le chargement du composant
    this.sequence = this.gameService.genererSequenceInitiale();
    console.log('Séquence initiale :', this.sequence); // Vérification
  }

  ajouterCouleur(): void {
    this.gameService.ajouterCouleur();
    this.sequence = this.gameService.getSequence();
    console.log('Nouvelle séquence :', this.sequence); // Vérification
  }
}
