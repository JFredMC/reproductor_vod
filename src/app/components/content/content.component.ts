import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  declare router: Router
  constructor( ) {}
  
  ngOnInit(): void {
  }

}
