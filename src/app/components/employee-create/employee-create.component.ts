import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(20)]],
      emai: [null, [Validators.required, Validators.email]],
      address: [null, ],
      birthDate: [null, [Validators.required]],
      country: [null, ],
      gender: [null, ]
    })
  }

  processForm(form: FormGroup) {
    alert(JSON.stringify(form.value));
  }
}
