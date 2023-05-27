import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    QuizMainComponent,
    QuizItemComponent,
    AnswerListComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
