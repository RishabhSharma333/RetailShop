
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  
  constructor() { }
  receipt:any;
  totalBill:number=0;
  ngOnInit(): void {
    this.receipt=new Set();
  }
  
  removeItem(item:any){
    this.receipt.delete(item);
  }
  
  calculateTotal(){
    for(let item of this.receipt){
      if(item.quantity>0&&item.pricePerPiece>0)
      this.totalBill+=item.quantity*item.pricePerPiece;
    }
      console.log(this.totalBill);
    return this.totalBill;
  }

  cancelBill(){
    this.receipt=new Set();
    this.totalBill=0;
  }

  editBill(){
    this.totalBill=0;
  }

  onConfirmBill(){
   console.log(this.receipt);
  }
}
