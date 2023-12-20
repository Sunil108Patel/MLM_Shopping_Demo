import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,MatSelectModule,SweetAlert2Module,MatInputModule,MatFormFieldModule,MatIconModule,HttpClientModule,MatButtonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  
  registerURL:string='http://localhost:8000/MLM/Register';


  // stateURL : string ='';

  states: any;

  countries:any;

  hide=true
   
  registerForm = new FormGroup({
    UserId : new FormControl('',[Validators.required,Validators.email]),
    Password : new FormControl('',[Validators.required]),
    SponsorUserId:new FormControl('',[Validators.required]),
    FirstName:new FormControl('',[Validators.required]),
    LastName:new  FormControl('',[Validators.required]),
    MaritalStatus : new FormControl('',[Validators.required]),
    Gender : new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.required]),
    District : new FormControl('',[Validators.required]),
    State : new FormControl('',[Validators.required]),
    Country :new FormControl('',[Validators.required]),
    Pincode : new FormControl('',[Validators.required]),
    MobileNo : new FormControl('',[Validators.required]),
    EmailId : new FormControl('',[Validators.required]),
  })


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // let data = JSON.parse(sessionStorage.getItem("add_data")!);
    // console.log(data)
    this.countryDetails();
    this.stateDetails();

   }


  RegisterData(){ 
    // console.log("register")
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
  
    let value=this.registerForm.value;
  
    let registerUser={
      UserId :value.UserId,
      Password : value.Password,
      SponsorUserId : value.SponsorUserId,
      FirstName : value.FirstName,
      LastName:value. LastName ,
      MaritalStatus : value. MaritalStatus,
      Gender : value. Gender,
      Address: value. Address,
      District : value. District,
      State : value. State,
      Country :value.Country, 
      Pincode : value.Pincode, 
      MobileNo : value. MobileNo,
      EmailId : value. EmailId
    }
    console.log(registerUser)
    this.http.post(this.registerURL,registerUser).subscribe((res:any)=>{

      console.log('ok')  

      if(res.success){
        alert("Welcome to the login Page")
        this.router.navigateByUrl('/login')
  
      }
      else{
        alert(res.message)
      }
  
    })
   }
    
  }
 
  countryDetails(){
     this.http.get('http://localhost:8000/MLM/Country').subscribe((data:any)=>{
      console.log('country details',data)
      this.countries=data.data
    
    })
  }

  stateDetails(){
    let countryId = this.registerForm.controls.Country.value;
    this.http.get('http://localhost:8000/MLM/States?countryId='+countryId).subscribe((id:any)=>{
      console.log('states details',id)
     
      this.states=id.data
      
      // console.log("Id")
      
    })
  } 



}
