import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  registerToNewstellerMessage = 'Don\'t miss the latest posts!';
  constructor() { }

  ngOnInit(): void {
  }

}
