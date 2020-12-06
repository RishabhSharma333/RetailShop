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
  editFormString:string='';
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
    this.editFormString='';
    this.isModalActive=false;
    this.modalItem=false;
    this.items=new Map<string,any>();
    this.items.set('ahav',{company:'company abc',pricePerPiece:12,stockLeft:45});
    this.items.set('same',{company:'company bca',pricePerPiece:2,stockLeft:5});
    this.items.set('card',{company:'company cab',pricePerPiece:42,stockLeft:4});
    this.items.set('tabe',{company:'company dca',pricePerPiece:72,stockLeft:43});
    this.items.set('tube',{company:'company abc',pricePerPiece:92,stockLeft:3});
    this.items.set('samu',{company:'company bca',pricePerPiece:62,stockLeft:50});
    this.items.set('gxxc',{company:'company cba',pricePerPiece:15,stockLeft:40});
    this.items.set('deta',{company:'company dca',pricePerPiece:7,stockLeft:46});
    this.items.set('alfa',{company:'company eac',pricePerPiece:92,stockLeft:3});
    this.items.set('alfo',{company:'company dca',pricePerPiece:42,stockLeft:0});
    this.items.set('beta',{company:'company fed',pricePerPiece:65,stockLeft:41});
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
    this.editFormString='';
    this.toggleModal();

  }

  modifyItem(itemKey:string){
    this.itemForm.reset();
    this.toggleModal();
    var itemValue=this.items.get(itemKey);
    this.receiptComponent.removeItem(itemKey);
    this.receiptComponent.totalBill=0;
    this.itemForm.get('name').setValue(itemKey);
    this.itemForm.get('pricePerPiece').setValue(itemValue.pricePerPiece);
    this.itemForm.get('company').setValue(itemValue.company);
    this.itemForm.get('stockLeft').setValue(itemValue.stockLeft);  
    this.editFormString=itemKey;
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

  addItemToReceipt(Item: string) {
    if (this.receiptComponent.totalBill == 0&&(!this.isModalActive)) {
      // console.log(Item);
      var value=this.items.get(Item);
      value.quantity=1;
      // delete value.stockLeft;
      this.receiptComponent.receipt.set(Item,value);
      console.log(this.receiptComponent.receipt);
    }

  }

  onEditItemForm(editItemStockForm:NgForm){
    console.log(editItemStockForm);
  }

  onSubmitItemForm(){
    if(this.editFormString==''){
      this.items.set(this.itemForm.value.name,{company:this.itemForm.value.company,pricePerPiece:this.itemForm.value.pricePerPiece,stockLeft:this.itemForm.value.stockLeft});
    }
    else{
      this.items.delete(this.editFormString);
      this.items.set(this.editFormString,{company:this.itemForm.value.company,pricePerPiece:this.itemForm.value.pricePerPiece,stockLeft:this.itemForm.value.stockLeft})
    }
    this.toggleModal();
    
  }

  unsorted(){}

}
