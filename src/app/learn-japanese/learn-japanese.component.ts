import {Component, NgModule, OnInit} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@Component({
  selector: 'app-learn-hiragana',
  templateUrl: './learn-japanese.component.html',
  styleUrls: ['./learn-japanese.component.css']
})
export class LearnJapaneseComponent implements OnInit {
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
  public katakana = [
    // Vowels
    {japanese:"ア", english: "a"},
    {japanese:"イ", english: "i"},
    {japanese:"ウ", english: "u"},
    {japanese:"エ", english: "e"},
    {japanese:"オ", english: "o"},
    // K Family
    {japanese:"カ", english: "ka"},
    {japanese:"キ", english: "ki"},
    {japanese:"ク", english: "ku"},
    {japanese:"ケ", english: "ke"},
    {japanese:"コ", english: "ko"},
    // S Family
    {japanese:"サ", english: "sa"},
    {japanese:"シ", english: "shi"},
    {japanese:"ス", english: "su"},
    {japanese:"セ", english: "se"},
    {japanese:"ソ", english: "so"},
    // T Family
    {japanese:"タ", english: "ta"},
    {japanese:"チ", english: "chi"},
    {japanese:"ツ", english: "tsu"},
    {japanese:"テ", english: "te"},
    {japanese:"ト", english: "to"},
    // N Family
    {japanese:"ナ", english: "na"},
    {japanese:"ニ", english: "ni"},
    {japanese:"ヌ", english: "nu"},
    {japanese:"ネ", english: "ne"},
    {japanese:"ノ", english: "no"},
    // H Family
    {japanese:"ハ", english: "ha"},
    {japanese:"ヒ", english: "hi"},
    {japanese:"フ", english: "fu"},
    {japanese:"ヘ", english: "he"},
    {japanese:"ホ", english: "ho"},
    // M Family
    {japanese:"マ", english: "ma"},
    {japanese:"ミ", english: "mi"},
    {japanese:"ム", english: "mu"},
    {japanese:"メ", english: "me"},
    {japanese:"モ", english: "mo"},
    // Y Family
    {japanese:"ヤ", english: "ya"},
    {japanese:"ユ", english: "yu"},
    {japanese:"ヨ", english: "yo"},
    // R Family
    {japanese: "ラ", english: "ra"},
    {japanese:"リ", english: "ri"},
    {japanese:"ル", english: "ru"},
    {japanese:"レ", english: "re"},
    {japanese:"ロ", english: "ro"},
    // W Family
    {japanese:"ワ", english: "wa"},
    {japanese:"ヲ", english: "wo"},
    // N
    {japanese:"ン", english: "n"},
    // With dots
    // G Family
    {japanese:"ガ", english: "ga"},
    {japanese:"ギ", english: "gi"},
    {japanese:"グ", english: "gu"},
    {japanese:"ゲ", english: "ge"},
    {japanese:"ゴ", english: "go"},
    // Z Family
    {japanese:"ザ", english: "za"},
    {japanese:"ジ", english: "ji"},
    {japanese:"ズ", english: "zu"},
    {japanese:"ゼ", english: "ze"},
    {japanese:"ゾ", english: "zo"},
    // D Family
    {japanese:"ダ", english: "da"},
    {japanese:"ヂ", english: "ji"},
    {japanese:"ヅ", english: "zu"},
    {japanese:"デ", english: "de"},
    {japanese:"ド", english: "do"},
    // B Family
    {japanese:"バ", english: "ba"},
    {japanese:"ビ", english: "bi"},
    {japanese:"ブ", english: "bu"},
    {japanese:"ベ", english: "be"},
    {japanese:"ボ", english: "bo"},
    // P Family
    {japanese:"パ", english: "pa"},
    {japanese:"ピ", english: "pi"},
    {japanese:"プ", english: "pu"},
    {japanese:"ペ", english: "pe"},
    {japanese:"ポ", english: "po"},
  ]
  public characterRows = [
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
  public selectedRows = [];
  public progress: number = 0;
  public isMultiChoiceGame: boolean = false;
  public multipleChoices: string[] = ["1","2","3","4"];
  public usingJapaneseText: boolean = true;
  public isInGame: Boolean = false;
  public Input: String = "";
  public multiGuessMode: boolean  = false;
  public isHiraganaMode: boolean = true;
  constructor() {

  }
  public get headerText(): string {
    if (this.isHiraganaMode) {
      return "Hiragana"
    }
    return "Katakana";
  }
  public get displayGameText(): string {
    if (this.usingJapaneseText) {
      if (!this.isMultiChoiceGame && this.multiGuessMode) {
        return this.selectedRows[this.gameSelections[0]].japanese + this.selectedRows[this.gameSelections[1]].japanese + this.selectedRows[this.gameSelections[2]].japanese
      }
      return this.selectedRows[this.gameSelection].japanese;
    }
    return this.selectedRows[this.gameSelection].english
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
      choices[0] = this.selectedRows[arr[0]].japanese;
      choices[1] = this.selectedRows[arr[1]].japanese;
      choices[2] = this.selectedRows[arr[2]].japanese;
      choices[3] = this.selectedRows[arr[3]].japanese;
    } else {
      choices[0] = this.selectedRows[arr[0]].english;
      choices[1] = this.selectedRows[arr[1]].english;
      choices[2] = this.selectedRows[arr[2]].english;
      choices[3] = this.selectedRows[arr[3]].english;
    }
    return choices;
  }

  public addSelectedFields() {
    this.selectedRows.splice(0);
    this.characterRows.forEach((section)=> {
      if (this.isHiraganaMode) {
        if (section.isEnabled) {
          for(let i = section.Start; i < section.End + 1; i++) {
            this.selectedRows.push(this.hiragana[i]);
          }
        }
      } else {
        if (section.isEnabled) {
          for(let i = section.Start; i < section.End + 1; i++) {
            this.selectedRows.push(this.katakana[i]);
          }
        }
      }
    })
  }

  public switchKanaMode() {
    this.isHiraganaMode = !this.isHiraganaMode;
  }

  public startGame() {
    this.addSelectedFields();
    if (this.selectedRows.length !== 0) {
      this.progress = 0;
      this.isInGame = true;
      this.setUpMultipleChoiceGame()
    }
  }

  public setUpMultipleChoiceGame() {
    this.isMultiChoiceGame = true;
    this.gameSelection = this.getNewChoice(this.selectedRows.length);
    this.multipleChoices = this.getChoicesForMultipleChoice(this.selectedRows.length, this.gameSelection);
  }

  public chooseAnswer(choice: string) {
    if (this.usingJapaneseText) {
      if (choice === this.selectedRows[this.gameSelection].english) {
        this.increaseProgress();
        this.setUpMultipleChoiceGame();
      } else {
        this.decreaseProgress();
        this.setUpMultipleChoiceGame();
      }
    } else {
      if (choice === this.selectedRows[this.gameSelection].japanese) {
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
      this.gameSelections = this.getThreeRandomIntegers(this.selectedRows.length);
    } else {
      this.gameSelection = this.getNewChoice(this.selectedRows.length);
    }
  }

  public toggleAll() {
    let hasDisabled = false;
    this.characterRows.forEach((section)=> {
      if (!section.isEnabled) {
        hasDisabled = true;
      }
    })
    if(hasDisabled) {
      this.characterRows.forEach((section)=> {
        section.isEnabled = true;
      })
    } else {
      this.characterRows.forEach((section)=> {
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
      if (this.Input.toLowerCase() === (this.selectedRows[this.gameSelections[0]].english +
                          this.selectedRows[this.gameSelections[1]].english +
                          this.selectedRows[this.gameSelections[2]].english)) {
        this.increaseProgress();
        this.setupTypeGame();
      } else {
        this.decreaseProgress();
        this.setupTypeGame();
      }
    } else {
      if (this.Input.toLowerCase() === this.selectedRows[this.gameSelection].english) {
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
