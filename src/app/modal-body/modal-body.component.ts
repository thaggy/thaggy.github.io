import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.css']
})
export class ModalBodyComponent implements OnInit {

  @Input() modalTitle = "";
  @Input() modalId = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
