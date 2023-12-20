import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
// import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatFormFieldModule,MatIconModule,FormsModule,MatDividerModule,ReactiveFormsModule,HttpClientModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit {
  
  loginURL:string='http://localhost:8000/MLM/login'

  AddData:any;

  hide=true
  
  constructor(private http: HttpClient, private router: Router) { }
  
  loginForm=new FormGroup({
    UserId:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required]),
    // IpAddress:new FormControl(''),
    // URL:new FormControl('')
  })

  ngOnInit(): void {
    // let data = JSON.parse(sessionStorage.getItem("add_data")!);
    // console.log(data)

  }
  loginData() {

    // console.log("logged in!")

    if(this.loginForm.valid){
      console.log(this.loginForm.value);

    let value=this.loginForm.value;

    let loginUser={
      "UserId":value.UserId,
      "Password":value.Password,
      // "IpAddress":value.IpAddress,
      // "URL":''
    }
    this.http.post(this.loginURL, loginUser).subscribe((res: any) => {
      
      if(res.success){
        // alert(res.message)
        Swal.fire("Welcome to dashboard!");
        this.router.navigateByUrl('/dashboard')
      }
      else{
        // alert(res.message)
        
      }
    });
    
    }
  }

}
