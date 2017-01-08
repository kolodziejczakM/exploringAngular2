import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})

export class FormValidationComponent implements OnInit {
  complexForm : FormGroup;
  photoBase64 : String = "";
  

  constructor(fb:FormBuilder) {
    this.complexForm = fb.group({
      firstName : ["", Validators.required],
      workerId: ["",Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(6)])],
      email: ["",Validators.compose([Validators.required,Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")])],
      phone:["",Validators.compose([Validators.required,Validators.pattern("^[0-9]+$")])]
    })
  }
  //formFields = [for (key of Object.keys(this.complexForm.value)) {this.complexForm.value[key]}];
  
  submitForm(value: any){
    console.log(value);
  }

  logThisForm(){
    console.log(this.complexForm);
    console.log(Object.keys(this.complexForm.value).map(el=>el));
  }

  fileChangeEvent(fileInput: any, context:any){
      if (fileInput.target.files && fileInput.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e : any) {
          context.photoBase64 = e.target.result;
        }
        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  ngOnInit() {
  }

}
