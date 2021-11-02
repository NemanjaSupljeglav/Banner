import { Component, OnInit } from '@angular/core';
import { BannersService } from '../../services/banners.service';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
   animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
  

})

export class BannersComponent implements OnInit {
  public current = 0;
  img_list={  }
  public banners: any = [];
  public bannersHeader: any = [];
  public counter=0;
  baneri: any;
  constructor(private bannerService:BannersService) {

    this.bannerService.getBanneri().subscribe((banners: any) => {
      
        this.banners=banners.Result;
        console.log(this.banners);
        console.log(this.banners.length);

        if(this.banners && this.banners.length > 0){
          // this.bannersHeader = //
          this.bannersHeader=this.banners.filter((zz: any) => zz.Type == 6);

          
        }

    }) 

   }

  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.bannersHeader.length;
      console.log("this.current")
      console.log(this.current)
      console.log("this.current")
    }, 7000);
    
  }

}
