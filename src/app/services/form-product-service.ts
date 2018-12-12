import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Employee } from '../models/Employee.model';

@Injectable()
export class FormProductService{

    constructor(http: Http){

    }

    postForm(employee: Employee){
        console.log(employee);
    }

}