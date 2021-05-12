import { Component, OnInit } from '@angular/core';
import {slideInAnimation} from '../../animation/animation';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
  animations :[slideInAnimation]
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
