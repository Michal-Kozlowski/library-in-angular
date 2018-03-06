import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  onSubmit(name, password) {
    let check = false;
    this.data.users.forEach((user) => {
      if(user.name === name){          
        check = true;
      }
    });
    if(!check) {        
      this.data.logged.name = name;
      this.data.logged.password = password;
      this.data.users.push({name: name, password: password});
      this.data.saveData();
      this._router.navigate(['/library']);
    } else {
      alert("Name already in use");
    }
    return false;
  }

  constructor(private _router: Router, private _route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
  }

}
