import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup,FormControl,FormControlName, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
   constructor(){

   }
   ngOnInit(): void {
    console.log("hi")
   }

   public formValue=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
   })
   isTrySubmit:boolean=false;
   isButtonChange:boolean=false;
   activeIndex:number|any=-1;
   currentIndex:number|any;
   addValues:string[]|any=[];

   submit():void{
    this.isTrySubmit=true;
    if(this.formValue.valid){
      this.addValues.push(this.formValue.value)
      console.log("formvalues",this.addValues)
      this.isTrySubmit=false;
      this.formValue.reset()
    }
 

   }
   clear(){
    if(this.isButtonChange){
      this.isButtonChange=false;
    
    }
    this.formValue.reset();
    this.isTrySubmit=false

   }
   edit(v:any,index:number){
    this.formValue.get(['name'])?.patchValue(v.name)
    this.formValue.get(['email'])?.patchValue(v.email)
    this.formValue.get(['password'])?.patchValue(v.password)
    this.currentIndex=index;
    if(!this.isButtonChange){
      this.isButtonChange=true;
    }


   }
   updateSave(){
    this.addValues[this.currentIndex]=this.formValue.value;
    this.currentIndex=null;
    if(this.isButtonChange){
      this.isButtonChange=false;
      this.formValue.reset()
    }

   }
   delete(index:number){
    this.addValues.splice(index,1)

   }


}
