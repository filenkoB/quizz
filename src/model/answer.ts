export class Answer {
    public mark : string;
    public text : string;
    public isCorrect : boolean;

    constructor(mark : string, text : string, isCorrect : boolean) {
        this.mark = mark;
        this.text = text;
        this.isCorrect = isCorrect;
    }
}