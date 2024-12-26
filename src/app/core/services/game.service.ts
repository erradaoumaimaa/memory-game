import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    private sequence: string[] = [];

    genererSequenceInitiale(): string[] {
      this.sequence = [this.genererCouleurAleatoireUnique()];
      return this.sequence;
    }

    ajouterCouleur(): void {
      const nouvelleCouleur = this.genererCouleurAleatoireUnique();
      this.sequence.push(nouvelleCouleur);
    }

    getSequence(): string[] {
      return this.sequence;
    }

    private genererCouleurAleatoireUnique(): string {
      let couleur: string;
      do {
        couleur = this.genererCouleurAleatoire();
      } while (this.sequence.includes(couleur));
      return couleur;
    }

    private genererCouleurAleatoire(): string {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
