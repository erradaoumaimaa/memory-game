import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/sounds/wrong-place-129242.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  play(): void {
    this.audio.play().catch((error) => {
      console.error('Audio play failed:', error);
    });
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
