import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  public link = 'https://github.com/avenuer/dilta/releases/download/0.0.1/Marker.Setup.0.0.0.exe';
  constructor() {}

  ngOnInit() {

  }
}
