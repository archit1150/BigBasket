import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private router : Router) { }

  userDetail = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    contact: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
  }
orderPlaced(){
  this.router.navigate(['/orderPlaced'])
}
}
