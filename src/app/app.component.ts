import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'day33-manifest-demo';

  isOnline: boolean;

  constructor() {
    this.isOnline = false;
  }

  ngOnInit(): void {
    this.isOnline = window.navigator.onLine;

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));

  }

  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
  }
}
