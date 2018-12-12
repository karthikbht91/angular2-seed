import {Component} from '@angular/core';
import { Employee } from '../models/Employee.model';
import { NgForm } from '@angular/forms';
import { FormProductService } from '../services/form-product-service'

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languagesList : string[] = ["English", "German", "Dutch"];
  model = new Employee('', '', true, '', 'default');
  isPrimaryLanguageNull: boolean = false;

  validatePrimaryLanguage(value){
    if(value === "default"){
      this.isPrimaryLanguageNull = true;
    }
    else{
      this.isPrimaryLanguageNull = false;
    }
  }
  
  constructor(private formPost: FormProductService){

  }
  submitForm(form: NgForm){
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.isPrimaryLanguageNull){
      return;
    }
    this.formPost.postForm(this.model);
    console.log(form);

  }
  //can be set/ reset using set and get acessors
  // _firstName: string = " ";
  // get firstName(): string{
  //   return this._firstName
  // }
  // set firstName(value){
  //   this._firstName = value;
  // }
}
