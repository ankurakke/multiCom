import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code-maker',
  templateUrl: './qr-code-maker.component.html',
  styleUrls: ['./qr-code-maker.component.css']
})
export class QrCodeMakerComponent {
  myQR:string | undefined;
  submitted:boolean;
  imgSrc:string | undefined;
  constructor(){
    this.submitted = false;
  }

  onSubmit():void{
    this.submitted = false;
    this.imgSrc="http://api.qrserver.com/v1/create-qr-code/?data="+this.myQR!+"&size=200x200";
    console.log(this.imgSrc);
    this.submitted = true;


  }


  
}
