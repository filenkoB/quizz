import { Routes } from "@angular/router";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { QuizMainComponent } from "./quiz-main/quiz-main.component";

const routes : Routes = [
    { path: "", pathMatch: "full", component: MainMenuComponent },
    { path: "quizz/:id", pathMatch: "full", component: QuizMainComponent }
]

export { routes };