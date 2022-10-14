import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  collapsed = false;

  ngOnInit(): void {
    $(document).ready(function() {
      $(".toggle-collapse").click(function(){
        $(".header").toggleClass('collapse')
      })
      });
  }

}
