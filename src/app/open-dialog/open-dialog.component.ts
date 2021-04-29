import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.css']
})
export class OpenDialogComponent implements OnInit {

  isOpenDialog = false;

  constructor() { }

  ngOnInit() {
  }

  openDialog(){
    var dialog = (<HTMLInputElement>document.getElementById('showDialog')); 
    dialog.style.display = this.isOpenDialog ? "none" : "block"; 
    this.isOpenDialog = !this.isOpenDialog;
  }
}
