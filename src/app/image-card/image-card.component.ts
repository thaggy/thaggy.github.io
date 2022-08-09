import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  // If no photo is set, it is a screen from NieR: Automata, a very cool game
  @Input() imgSource: string = "https://i.imgur.com/5lmaahN.jpeg";
  @Input() cardTitle: string = "Test123";
  @Input() cardBody: string = "Test123";

  constructor() { }

  ngOnInit(): void {
  }

}
