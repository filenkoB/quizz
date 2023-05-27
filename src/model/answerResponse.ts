export class AnswerResponse {
    public answerNumber = 0;
    public isAnswered = false;
    public selectedAnswer = -1
    public isCorrect = false;

    constructor(isAnswered : boolean, selectedAnswer : number, answerNumber : number = 0, isCorrect : boolean = false) {
        this.answerNumber = answerNumber;
        this.isAnswered = isAnswered;
        this.selectedAnswer = selectedAnswer;
        this.isCorrect = isCorrect;
    }
}