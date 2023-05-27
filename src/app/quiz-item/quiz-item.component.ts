import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/model/question';
import { AnswerResponse } from 'src/model/answerResponse';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent {
  @Input() public question! : Question;
  @Input() public answer? : AnswerResponse;
  @Output() setAnswer = new EventEmitter<AnswerResponse>();

  public onSetAnswer(selectedAnswer : AnswerResponse) : void {
    this.setAnswer.emit(selectedAnswer);
  }
}
