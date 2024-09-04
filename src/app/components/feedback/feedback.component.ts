import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  contact!: FormGroup;
  official!: string;
  phone!: string; ext!: number;

  get email() {
    return this.contact.get('email');
  }

  get subject() {
    return this.contact.get('subject');
  }

  get message() {
    return this.contact.get('message');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.official='priya.gnanas28@gmail.com';
    this.phone = "(978)-282-1184" + " Ext: 7053";
    this.contact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])[A-Za-zd$@$!%*?&].{2,}'
          ),
        ],
      ],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.contact.value);
  }

}
