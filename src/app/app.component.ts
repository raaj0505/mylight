import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    let document: any = window.document || '';
    document.querySelector('circle').addEventListener('click', (e: any) => {
      const randomColour = Math.round(Math.random() * 0xffffff);
      e.target.style.stroke = `#${randomColour.toString(16)}`;
    });
  }
}
