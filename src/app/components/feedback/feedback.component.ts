import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { bounceIn, bounceOut } from 'src/app/animations/animation';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [
    trigger('bounce', [
      transition(
        'void => *',
        useAnimation(bounceIn, {
          params: { timing: 0.7 },
        })
      ),
      transition(
        '* => void',
        useAnimation(bounceOut, {
          params: { timing: 0.6 },
        })
      ),
    ]),
  ],
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
