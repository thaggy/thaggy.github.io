import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent implements OnInit {

  @Input() buttonText = "";
  @Input() modalId = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.modalId = "#" + this.modalId;
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
