import {Component, NgModule, OnInit} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-learn-hiragana',
  templateUrl: './learn-hiragana.component.html',
  styleUrls: ['./learn-hiragana.component.css']
})
export class LearnHiraganaComponent implements OnInit {
  @NgModule({
    imports: [MatProgressBarModule]
  })
  public hiragana = [
    // Vowels
    {japanese:"あ", english: "a"},
    {japanese:"い", english: "i"},
    {japanese:"う", english: "u"},
    {japanese:"え", english: "e"},
    {japanese:"お", english: "o"},
    // K Family
    {japanese:"か", english: "ka"},
    {japanese:"き", english: "ki"},
    {japanese:"く", english: "ku"},
    {japanese:"け", english: "ke"},
    {japanese:"こ", english: "ko"},
    // S Family
    {japanese:"さ", english: "sa"},
    {japanese:"し", english: "shi"},
    {japanese:"す", english: "su"},
    {japanese:"せ", english: "se"},
    {japanese:"そ", english: "so"},
    // T Family
    {japanese:"た", english: "ta"},
    {japanese:"ち", english: "chi"},
    {japanese:"つ", english: "tsu"},
    {japanese:"て", english: "te"},
    {japanese:"と", english: "to"},
    // N Family
    {japanese:"な", english: "na"},
    {japanese:"に", english: "ni"},
    {japanese:"ぬ", english: "nu"},
    {japanese:"ね", english: "ne"},
    {japanese:"の", english: "no"},
    // H Family
    {japanese:"は", english: "ha"},
    {japanese:"ひ", english: "hi"},
    {japanese:"ふ", english: "fu"},
    {japanese:"へ", english: "he"},
    {japanese:"ほ", english: "ho"},
    // M Family
    {japanese:"ま", english: "ma"},
    {japanese:"み", english: "mi"},
    {japanese:"む", english: "mu"},
    {japanese:"め", english: "me"},
    {japanese:"も", english: "mo"},
    // Y Family
    {japanese:"や", english: "ya"},
    {japanese:"ゆ", english: "yu"},
    {japanese:"よ", english: "yo"},
    // R Family
    {japanese: "ら", english: "ra"},
    {japanese:"り", english: "ri"},
    {japanese:"る", english: "ru"},
    {japanese:"れ", english: "re"},
    {japanese:"ろ", english: "ro"},
    // W Family
    {japanese:"わ", english: "wa"},
    {japanese:"を", english: "wo"},
    // N
    {japanese:"ん", english: "n"},
    // With dots
    // G Family
    {japanese:"が", english: "ga"},
    {japanese:"ぎ", english: "gi"},
    {japanese:"ぐ", english: "gu"},
    {japanese:"げ", english: "ge"},
    {japanese:"ご", english: "go"},
    // Z Family
    {japanese:"ざ", english: "za"},
    {japanese:"じ", english: "ji"},
    {japanese:"ず", english: "zu"},
    {japanese:"ぜ", english: "ze"},
    {japanese:"ぞ", english: "zo"},
    // D Family
    {japanese:"だ", english: "da"},
    {japanese:"ぢ", english: "ji"},
    {japanese:"づ", english: "zu"},
    {japanese:"で", english: "de"},
    {japanese:"ど", english: "do"},
    // B Family
    {japanese:"ば", english: "ba"},
    {japanese:"び", english: "bi"},
    {japanese:"ぶ", english: "bu"},
    {japanese:"べ", english: "be"},
    {japanese:"ぼ", english: "bo"},
    // P Family
    {japanese:"ぱ", english: "pa"},
    {japanese:"ぴ", english: "pi"},
    {japanese:"ぷ", english: "pu"},
    {japanese:"ぺ", english: "pe"},
    {japanese:"ぽ", english: "po"},
  ]
  public hiraganaSections = [
    {Family: "A Row", Start: 0, End: 4, isEnabled: false},
    {Family: "Ka Row", Start: 5, End: 9, isEnabled: false},
    {Family: "Sa Row", Start: 10, End: 14, isEnabled: false},
    {Family: "Ta Row", Start: 15, End: 19, isEnabled: false},
    {Family: "Na Row", Start: 20, End: 24, isEnabled: false},
    {Family: "Ha Row", Start: 25, End: 29, isEnabled: false},
    {Family: "Ma Row", Start: 30, End: 34, isEnabled: false},
    {Family: "Ya Row", Start: 35, End: 37, isEnabled: false},
    {Family: "Ra Row", Start: 38, End: 42, isEnabled: false},
    {Family: "Wa Row", Start: 43, End: 44, isEnabled: false},
    {Family: "N", Start: 45, End: 45, isEnabled: false},
    {Family: "Ga Row", Start: 46, End: 50, isEnabled: false},
    {Family: "Za Row", Start: 51, End: 55, isEnabled: false},
    {Family: "Da Row", Start: 56, End: 60, isEnabled: false},
    {Family: "Ba Row", Start: 61, End: 65,isEnabled: false},
    {Family: "Pa Row", Start: 66, End: 70, isEnabled: false},
  ]
  public gameSelection: number = 0;
  public gameSelections: number[] = [-1,-1,-1];
  public selectedHiragana = [];
  public progress: number = 0;
  public isMultiChoiceGame: boolean = false;
  public multipleChoices: string[] = ["1","2","3","4"];
  public usingJapaneseText: boolean = true;
  public isInGame: Boolean = false;
  public Input: String = "";
  public multiGuessMode: boolean  = false;
  constructor() {

  }
  public get enableButtonText(): string {
    let hasDisabled = false;
    this.hiraganaSections.forEach((section)=> {
      if (!section.isEnabled) {
        hasDisabled = true;
      }
    })
    if (hasDisabled) {
      return "Enable All";
    }
    return "Disable All"
  }
  public get displayGameText(): string {
    if (this.usingJapaneseText) {
      if (!this.isMultiChoiceGame && this.multiGuessMode) {
        return this.selectedHiragana[this.gameSelections[0]].japanese + this.selectedHiragana[this.gameSelections[1]].japanese + this.selectedHiragana[this.gameSelections[2]].japanese
      }
      return this.selectedHiragana[this.gameSelection].japanese;
    }
    return this.selectedHiragana[this.gameSelection].english
  }

  public getNewChoice(maxValue: number): number {
    let newChoice = this.gameSelection;
    while (this.gameSelection === newChoice) {
      newChoice = this.getRandomInteger(maxValue);
    }
    return newChoice;
  }

  public getRandomInteger(maxValue: number): number {
    return Math.floor(Math.random() * maxValue);
  }

  public getThreeRandomIntegers(maxValue: number): number[] {
    let arr = [-1,-1,-1];
    while (new Set(arr).size !== arr.length) {
      arr[0] = this.getRandomInteger(maxValue);
      arr[1] = this.getRandomInteger(maxValue);
      arr[2] = this.getRandomInteger(maxValue);
    }
    return arr;
  }

  public getChoicesForMultipleChoice(maxValue: number, answer: number): string[] {
    let arr = [-1,-1,-1, -1];
    let choices = ["","","",""]
    while (new Set(arr).size !== arr.length) {
      arr[0] = this.getRandomInteger(maxValue);
      arr[1] = this.getRandomInteger(maxValue);
      arr[2] = this.getRandomInteger(maxValue);
      arr[3] = this.getRandomInteger(maxValue);
    }
    if (!arr.some(element => element === answer)) {
      const answerSlot = this.getRandomInteger(4);
      arr[answerSlot] = answer;
    }
    if (!this.usingJapaneseText) {
      choices[0] = this.selectedHiragana[arr[0]].japanese;
      choices[1] = this.selectedHiragana[arr[1]].japanese;
      choices[2] = this.selectedHiragana[arr[2]].japanese;
      choices[3] = this.selectedHiragana[arr[3]].japanese;
    } else {
      choices[0] = this.selectedHiragana[arr[0]].english;
      choices[1] = this.selectedHiragana[arr[1]].english;
      choices[2] = this.selectedHiragana[arr[2]].english;
      choices[3] = this.selectedHiragana[arr[3]].english;
    }
    return choices;
  }

  public addSelectedFields() {
    this.selectedHiragana.splice(0);
    this.hiraganaSections.forEach((section)=> {
      if (section.isEnabled) {
        for(let i = section.Start; i < section.End + 1; i++) {
          this.selectedHiragana.push(this.hiragana[i]);
        }
      }
    })
  }

  public startGame() {
    this.addSelectedFields();
    if (this.selectedHiragana.length !== 0) {
      this.progress = 0;
      this.isInGame = true;
      this.setUpMultipleChoiceGame()
    }
  }

  public setUpMultipleChoiceGame() {
    this.isMultiChoiceGame = true;
    this.gameSelection = this.getNewChoice(this.selectedHiragana.length);
    this.multipleChoices = this.getChoicesForMultipleChoice(this.selectedHiragana.length, this.gameSelection);
  }

  public chooseAnswer(choice: string) {
    if (this.usingJapaneseText) {
      if (choice === this.selectedHiragana[this.gameSelection].english) {
        this.increaseProgress();
        this.setUpMultipleChoiceGame();
      } else {
        this.decreaseProgress();
        this.setUpMultipleChoiceGame();
      }
    } else {
      if (choice === this.selectedHiragana[this.gameSelection].japanese) {
        this.increaseProgress();
        this.setUpMultipleChoiceGame();
      } else {
        this.decreaseProgress();
        this.setUpMultipleChoiceGame();
      }
    }
    // IF PROGRESS IS AT 100, SWITCH GAMES
    if (this.progress >= 100) {
      if (this.usingJapaneseText) {
        this.progress = 0;
        this.usingJapaneseText = !this.usingJapaneseText;
        this.setUpMultipleChoiceGame();
      } else {
        // SWITCH TO TYPE GAME
        this.progress = 0;
        this.setupTypeGame();
      }
    }
  }

  public setupTypeGame() {
    this.isMultiChoiceGame = false;
    this.usingJapaneseText = true;
    this.Input = "";
    if (this.multiGuessMode) {
      this.gameSelections = this.getThreeRandomIntegers(this.selectedHiragana.length);
    } else {
      this.gameSelection = this.getNewChoice(this.selectedHiragana.length);
    }
  }

  public toggleAll() {
    if(this.enableButtonText === "Enable All") {
      this.hiraganaSections.forEach((section)=> {
        section.isEnabled = true;
      })
    } else {
      this.hiraganaSections.forEach((section)=> {
        section.isEnabled = false;
      })
    }
  }

  public increaseProgress() {
    this.progress += 5;
  }
  public decreaseProgress() {
    if (this.progress <= 0) {
      this.progress = 0;
    } else {
      this.progress -= 5;
    }
  }

  ngOnInit(): void {
  }

  checkAnswer() {
    if (this.multiGuessMode) {
      if (this.Input === (this.selectedHiragana[this.gameSelections[0]].english +
                          this.selectedHiragana[this.gameSelections[1]].english +
                          this.selectedHiragana[this.gameSelections[2]].english)) {
        this.increaseProgress();
        this.setupTypeGame();
      } else {
        this.decreaseProgress();
        this.setupTypeGame();
      }
    } else {
      if (this.Input === this.selectedHiragana[this.gameSelection].english) {
        this.increaseProgress();
        this.setupTypeGame();
      } else {
        this.decreaseProgress();
        this.setupTypeGame();
      }
    }
    if (this.progress >= 100) {
      if (!this.multiGuessMode) {
        this.multiGuessMode = true;
        this.progress = 0;
        this.setupTypeGame();
      } else {
        // Finished with all games
        this.isInGame = false;
        this.multiGuessMode = false;
        this.gameSelection = -1;
        this.isMultiChoiceGame = true;
      }
    }
  }
}
