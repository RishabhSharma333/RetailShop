import { Component, OnInit, ViewChild } from '@angular/core';
import { ReceiptComponent } from './receipt/receipt.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @ViewChild(ReceiptComponent, { static: false }) receiptComponent: ReceiptComponent;
  searchStock: string;
  searchItemByName: boolean;
  searchItemByCompany: boolean
  searchField: string;
  isModalActive:boolean;
  Items:any[]=[];
  modalItem:boolean=false;
  formPrice:number;
  formName:string='';
  formCompany:string='';
  stockNumber:number=1;
  items:any;
  constructor() { }

  ngOnInit(): void {
    this.searchItemByCompany=false;
    this.searchItemByName=true;
    this.isModalActive=false;
    this.modalItem=false;
    this.items=new Map<number,any>();
    this.items.set(this.stockNumber++,{name:'items 1',company:'company 1',pricePerPiece:12,stockLeft:45});
    this.items.set(this.stockNumber++,{name:'items 2',company:'company 2',pricePerPiece:2,stockLeft:5});
    this.items.set(this.stockNumber++,{name:'items 3',company:'company 3',pricePerPiece:42,stockLeft:4});
    this.items.set(this.stockNumber++,{name:'items 4',company:'company 4',pricePerPiece:72,stockLeft:43});
    this.items.set(this.stockNumber++,{name:'items 5',company:'company 5',pricePerPiece:92,stockLeft:3});
    this.items.set(this.stockNumber++,{name:'items 6',company:'company 6',pricePerPiece:62,stockLeft:50});
    this.items.set(this.stockNumber++,{name:'items 7',company:'company 7',pricePerPiece:15,stockLeft:40});
    this.items.set(this.stockNumber++,{name:'items 8',company:'company 4',pricePerPiece:7,stockLeft:46});
    this.items.set(this.stockNumber++,{name:'items 9',company:'company 5',pricePerPiece:92,stockLeft:3});
    this.items.set(this.stockNumber++,{name:'items a',company:'company 6',pricePerPiece:42,stockLeft:0});
    this.items.set(this.stockNumber++,{name:'items b',company:'company 7',pricePerPiece:65,stockLeft:41});

    
  }
  toggleModal(){
    this.isModalActive = !this.isModalActive;
  }
  searchBy(num:number){
    if(num==1){
      this.searchItemByCompany=false;
      this.searchItemByName=true;
    }
    else {
      this.searchItemByCompany=true;
      this.searchItemByName=false;
    }
  }
  addItemStock(item:any){
    this.items.set(this.stockNumber++,item);
  }
  findAllItems(){
    Array.from(this.Items.keys());
  }
  

}
