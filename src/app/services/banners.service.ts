import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannersService {
  private banneri: any;
  private readonly banneriUrl= 'https://demo.evona.ba:15001/bannerApi/banners/0';
  constructor(private httpClient:HttpClient) {
    

    
   }
   getBanneri(){
    return this.httpClient.get(this.banneriUrl, {
        headers: new HttpHeaders({
            TerminalId: "2222"
        })
    })
}
}
