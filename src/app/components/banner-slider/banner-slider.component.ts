import { Component, OnInit } from '@angular/core';
import { BannersService } from '../../services/banners.service';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
 /*animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
  */
})
export class BannerSliderComponent implements OnInit {
  public current = 0;
  public banners: any = [];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.banners.length;
    }, 5000);
  }

}
