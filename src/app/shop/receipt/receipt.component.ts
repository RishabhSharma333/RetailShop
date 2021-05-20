
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  
  constructor() { }
  receipt=new Map();
  totalBill:number=0;
  ngOnInit(): void {
    this.receipt=new Map<string,any>();
  }

  removeItem(item:string){
    this.receipt.delete(item);
  }
  
  calculateTotal(){
    for(let item of this.receipt.values()){
      if(item.quantity>0&&item.pricePerPiece>0)
      this.totalBill+=item.quantity*item.pricePerPiece;
    }
      console.log(this.totalBill);
    return this.totalBill;
  }

  cancelBill(){
    this.receipt=new Map();
    this.totalBill=0;
  }

  editBill(){
    this.totalBill=0;
  }

  onConfirmBill(){
   console.log(this.receipt);
  }
}
