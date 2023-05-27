import { Component } from '@angular/core';
import { Question } from 'src/model/question';
import { questions1, questions2 } from 'src/assets/store';
import { AnswerResponse } from 'src/model/answerResponse';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.scss']
})
export class QuizMainComponent {
  public number = 0;
  public questions : Question[];
  public currentQuestion : Question;
  public answeredQuestions : (AnswerResponse | undefined)[] = [];
  
  public quizzFinished = false;
  public correntAnswers = 0;
  public totalQuestions = 0;

  constructor(router : Router) {
    let url = router.url.split("/");
    this.questions = url[url.length - 1] === "1" ? questions1 : questions2;
    this.currentQuestion = this.questions[this.number];
  }

  public goToNextQuestion() {
    this.incrementNumber();
    this.currentQuestion = this.questions[this.number];
  }

  private incrementNumber() : void {
    this.number = this.number + 1 >= this.questions.length ? 0 : this.number + 1;
  }

  public onSetAnswer(answerResponse: AnswerResponse) : void {
    answerResponse.answerNumber = this.number;
    this.answeredQuestions[this.number] = answerResponse;
  }

  public finishQuizz() {
    this.correntAnswers = this.answeredQuestions.filter(q => q?.isCorrect).length;
    this.totalQuestions = this.questions.length;
    this.quizzFinished = true;
  }
}
