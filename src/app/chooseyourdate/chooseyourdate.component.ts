import { Component, OnInit } from '@angular/core';
import {DateOption} from "./optionClass";

@Component({
  selector: 'app-chooseyourdate',
  templateUrl: './chooseyourdate.component.html',
  styleUrls: ['./chooseyourdate.component.css']
})
export class ChooseyourdateComponent implements OnInit {
  // Odds are Go out path, Evens are stay in
  // 11 is completion
  options: DateOption[] = [{key: 0, header: "Where do we go?", optionOne: "Go Out", optionTwo: "Stay In", exitKeyOne: 1, exitKeyTwo: 2, requiresCompletion: false},
    {key: 1, header: "Where do we go out", optionOne: "Restaurant", optionTwo: "Lets go for a walk", exitKeyOne: 3, exitKeyTwo: 5, requiresCompletion: false},
    {key: 3, header: "Where should we eat?", optionOne: "Somewhere we've never been", optionTwo: "Somewhere we always go", exitKeyOne: 7, exitKeyTwo: 7, requiresCompletion: true},
    {key: 5, header: "Where should we walk?", optionOne: "Park", optionTwo: "Window Shopping", exitKeyOne: 7, exitKeyTwo: 7, requiresCompletion: true},
    {key: 7, header: "After Date Activity", optionOne: "Desert!", optionTwo: "Relax at home", exitKeyOne: 9, exitKeyTwo: 2, requiresCompletion: true},
    {key: 9, header: "Post Desert Activity", optionOne: "Go to the movies", optionTwo: "Relax at home", exitKeyOne: 11, exitKeyTwo: 2, requiresCompletion: true},
    {key: 2, header: "Stay In", optionOne: "Movie Night!", optionTwo: "Creative in the kitchen", exitKeyOne: 4, exitKeyTwo: 6, requiresCompletion: false},
    {key: 4, header: "What are we watching?", optionOne: "Spooky Scary Movie", optionTwo: "Something not so scary spooky", exitKeyOne: 8, exitKeyTwo: 8, requiresCompletion: true},
    {key: 6, header: "What are we making?", optionOne: "Complicated Dinner", optionTwo: "Something we know how to make", exitKeyOne: 8, exitKeyTwo: 8, requiresCompletion: true},
    {key: 8, header: "What next?", optionOne: "Post Date Walk", optionTwo: "Let's get Desert", exitKeyOne: 12, exitKeyTwo: 11, requiresCompletion: true},
    {key: 10, header: "Where should we walk?", optionOne: "Park", optionTwo: "Window Shopping", exitKeyOne: 11, exitKeyTwo: 11, requiresCompletion: true},
    {key: 11, header: "Congrats! You Finished the Date!", optionOne: "Start Over", optionTwo: "Start Over But Second Button", exitKeyOne: 0, exitKeyTwo: 0, requiresCompletion: false},
  ]
  currentOption: DateOption = null;
  showCompletion: boolean = false;

  public get isDateFinished(): boolean {
    if(this.currentOption.key == 11) {
      return true;
    }
    return false;
  }

  constructor() { }

  public handleCompletedClick() {
    this.showCompletion = false;
  }

  public handleOptionOneClick() {
    if(this.currentOption.requiresCompletion) {
      this.showCompletion = true;
    }
    let tempOption = this.options.find((option)=> {
      return this.currentOption.exitKeyOne == option.key;
    });
    if (tempOption !== undefined) {
      this.currentOption = tempOption;
    }
  }

  public handleOptionTwoClick() {
    if(this.currentOption.requiresCompletion) {
      this.showCompletion = true;
    }
    let tempOption = this.options.find((option)=> {
      return this.currentOption.exitKeyTwo == option.key;
    });
    if (tempOption !== undefined) {
      this.currentOption = tempOption;
    }
  }

  ngOnInit(): void {
    this.currentOption = this.options[0];
  }
}
