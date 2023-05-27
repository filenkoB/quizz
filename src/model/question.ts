import { Answer } from "./answer";

export class Question {
    public number : number;
    public text : string;
    public answers : Answer[];

    constructor(number : number, text : string, answer : Answer[]) {
        this.number = number;
        this.text = text;
        this.answers = answer;
    }
}