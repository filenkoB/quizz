import { Component, Input, OnChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Answer } from 'src/model/answer';
import { AnswerResponse } from 'src/model/answerResponse';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnChanges, OnDestroy {
  @Input() public answers? : Answer[];
  @Input() public answerResponse? : AnswerResponse;
  @Output() public setAnswer = new EventEmitter<AnswerResponse>();

  public selectedIndex = -1;
  public answerSelected = false;

  public selectAnswer(answer : Answer, index : number) {
    if (this.answerSelected) {
      return;
    }
    this.selectedIndex = index;
    this.answerSelected = true;

    this.setAnswer.emit(new AnswerResponse(this.answerSelected, this.selectedIndex, -1, this.answers![this.selectedIndex].isCorrect));
  }

  public ngOnChanges() {
    if (this.answerResponse) {
      this.selectedIndex = this.answerResponse.selectedAnswer;
      this.answerSelected = this.answerResponse.isAnswered;
    }
    else {
      this.selectedIndex = -1;
      this.answerSelected = false;
    }
  }

  public ngOnDestroy(): void {
    this.selectedIndex = -1;
    this.answerSelected = false;
    this.answerResponse = undefined;
  }
}
