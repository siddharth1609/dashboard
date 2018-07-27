import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
  } from '@angular/forms';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { signUpModel } from './signUpModel';
  import { UserService } from './user.service';
@Component({
    selector: 'user-cmp',
    //moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent{
    signUpform: FormGroup;
    signupdatamodel:signUpModel;

    constructor(private formBuilder: FormBuilder,
        private userService: UserService) {
        this.createForm();
    }

    // ngOnInit(){
    //     this.signUpform = new FormGroup({
    //         username: new FormControl()
    //      }); 
    //     // this.signUpform = this.formBuilder.group({
    //     //     username: [null, Validators.required],
    //     //     email: [null, [Validators.required, Validators.email]],
    //     //     firstname: [null, Validators.required],
    //     //     lastname: [null, Validators.required],
    //     //     // address: this.formBuilder.group({
    //     //     //     street: [null, Validators.required],
    //     //     //     zipcode: [null, Validators.required],
    //     //     //     city: [null, Validators.required],
    //     //     //     state: [null, Validators.required],
    //     //     //    country: [null, Validators.required]
    //     //     //  })
    //     //   });
    // }



  createForm() {
    this.signUpform = this.formBuilder.group({
             username:'',
             email: '',
             firstname:'',
             lastname:'',
            
                homeaddress: '',
                city: '',
                zipcode: '',
                country: ''
            
          });
  }
  onSubmit(signUpform){
    // if(this.signUpform.valid){
    // this.signupdatamodel = this.signUpform.value;
   
    //  this.userService.create(this.signupdatamodel).subscribe(()=>{
    //     console.log(this.signupdatamodel);  
    // });
    // }

    if(this.signUpform.valid){
    this.signupdatamodel = this.signUpform.value;
   
     this.userService.getAll().subscribe(()=>{
        console.log(this.signupdatamodel);  
    });
    }
  
 
}

}
