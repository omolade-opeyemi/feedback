import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

 page=''
  constructor() { }

  ngOnInit(): void {
    this.page = 'one'
  }
  rate(){
    this.page = 'two'
  }
  success(){
    this.page = 'three'
  }
  

}
