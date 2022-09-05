import { Component, OnInit } from '@angular/core';

import { media } from '../componentes/media';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  alignItems!: string;
  range = `(min-width: 768px) and (max-width: 991px)`;
  range$ = media(this.range);

  constructor() {}

  ngOnInit(): void {
    media(this.range).subscribe((matches) => {
      matches ? (this.alignItems = 'center') : (this.alignItems = 'center');
    });
  }
}
