import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartGameComponent } from './components/start-game/start-game.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    StartGameComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StartGameComponent,
  ]
})
export class GameModule {}
