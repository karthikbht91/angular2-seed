import {Component} from '@angular/core';
import { Employee } from '../models/Employee.model'
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languagesList : string[] = ["English", "German", "Dutch"];
  model = new Employee('', '', true, '', 'default');
  isPrimaryLanguageNull: boolean = false;

  validatePrimaryLanguage(event){
    if(this.model.primaryLanguage === "default"){
      this.isPrimaryLanguageNull = true;
    }
    else{
      this.isPrimaryLanguageNull = false;
    }
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
