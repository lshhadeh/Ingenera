import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../translate.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  
  ngOnInit() {
  }
  setLang(lang: string) {
    this.translate.use(lang);
  }

}
