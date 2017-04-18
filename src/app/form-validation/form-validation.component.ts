import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})

export class FormValidationComponent implements OnInit {
  complexForm: FormGroup;
  photoBase64 = '';

  constructor(
    private http: Http,
    fb: FormBuilder) {
    this.complexForm = fb.group({
      firstName : ['', Validators.required],
      workerId: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(6)])],
      email: ['', Validators.compose([Validators.required,
  Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]+$")])]
    });
  }
  // formFields = [for (key of Object.keys(this.complexForm.value)) {this.complexForm.value[key]}];

  serialize(obj: any): URLSearchParams {
    const params = new URLSearchParams();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            params.set(key, obj[key]);
        }
    }
    return params;
  }

  appendOptions(params = {}): any {
    // important to import Headers, RequestOptions, URLSearchParams

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({
      headers,
      search: this.serialize(params)
    });
    return options;
  }

  submitForm(value: any) {
    console.log(value);
    const paramObj = {id: 51};

    console.log('HEH?');
    this.http.get('https://ghibliapi.herokuapp.com/locations', this.appendOptions(paramObj)).subscribe(response => {
      console.log('Success response: ', response);
    }, err => {
      console.log('Failure response: ', err);
    });
  }

  logThisForm() {
    console.log(this.complexForm);
    console.log(Object.keys(this.complexForm.value).map(el=>el));
  }

  fileChangeEvent(fileInput: any, context: any) {
      if (fileInput.target.files && fileInput.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e : any) {
          context.photoBase64 = e.target.result;
          console.log('STRING: ', context.photoBase64)
        }

        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  ngOnInit() {
  }

}
