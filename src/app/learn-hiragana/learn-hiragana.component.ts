import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-hiragana',
  templateUrl: './learn-hiragana.component.html',
  styleUrls: ['./learn-hiragana.component.css']
})
export class LearnHiraganaComponent implements OnInit {
  hiragana = [
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
  isMultiChoiceGame: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
