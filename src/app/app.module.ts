import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HomeComponent } from './features/game/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    GameModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
