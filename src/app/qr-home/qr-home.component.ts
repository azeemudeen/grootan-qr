import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-qr-home',
  templateUrl: './qr-home.component.html',
  styleUrls: ['./qr-home.component.css']
})
export class QrHomeComponent implements OnInit {

  url : string;
  
  constructor(private router: Router,@Inject(DOCUMENT) private document: Document){
    this.url = this.document.location.hostname+'/return';
  };

  ngOnInit(){
    console.log(this.router.url);
    console.log(this.url);
    this.isSuccess();
  }

  isSuccess(){
    return true;
  }

}
