import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceiptComponent } from './receipt/receipt.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  modalItem:boolean=false;
  stockNumber:number=1;
  items:any;
  editFormId=-1;
  itemForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    pricePerPiece: new FormControl('',[Validators.required,Validators.min(0)]),
    company:new FormControl('',),
    stockLeft:new FormControl('',[Validators.required,Validators.min(0)])
  });
  constructor() { }

  ngOnInit(): void {
    this.searchItemByCompany=false;
    this.searchItemByName=true;
    this.searchField='';
    this.editFormId=-1;
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

  addItemStock(){
    this.itemForm.reset();
    this.editFormId=-1;
    this.toggleModal();

  }

  modifyItem(itemKey:any){
    this.itemForm.reset();
    this.toggleModal();
    var itemValue=this.items.get(itemKey);
    this.itemForm.get('name').setValue(itemValue.name);
    this.itemForm.get('pricePerPiece').setValue(itemValue.pricePerPiece);
    this.itemForm.get('company').setValue(itemValue.company);
    this.itemForm.get('stockLeft').setValue(itemValue.stockLeft);  
    this.editFormId=itemKey;
    // console.log(itemValue);
  }
  get name(){
    return this.itemForm.get('name');
  }
  get company(){
    return this.itemForm.get('company');

  }
  get pricePerPiece(){
    return this.itemForm.get('pricePerPiece');
  }
  get stockLeft(){
    return this.itemForm.get('stockLeft');
  }
  addItemToReceipt(Item: any) {
    if (this.receiptComponent.totalBill == 0&&(!this.isModalActive)) {
      // console.log(Item);
      Item.quantity = 1;
      delete Item.stockLeft;
      this.receiptComponent.receipt.add(Item);
      console.log(this.receiptComponent.receipt);
    }

  }
  onEditItemForm(editItemStockForm:NgForm){
    console.log(editItemStockForm);
  }
  onSubmitItemForm(){
    // console.log(this.itemForm);
    // console.log('printing id   '  +this.editFormId);
    if(this.editFormId==-1){
      this.items.set(this.stockNumber++,{name:this.itemForm.value.name, company:this.itemForm.value.company,pricePerPiece:this.itemForm.value.pricePerPiece,stockLeft:this.itemForm.value.stockLeft});
    }
    else{
      this.items.delete(this.editFormId);
      this.items.set(this.editFormId,{name:this.itemForm.value.name, company:this.itemForm.value.company,pricePerPiece:this.itemForm.value.pricePerPiece,stockLeft:this.itemForm.value.stockLeft})
      
    }
    this.toggleModal();
  }

}
