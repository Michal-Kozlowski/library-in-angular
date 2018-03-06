import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  onSubmit(name, password) {
    this.data.users.forEach((user) => {
      if(user.name === name && user.password === password){
        this.data.logged.name = name;
        this.data.logged.password = password;
        this.data.saveData();
      }
    });
    if(this.data.logged.name !== '') {
      this._router.navigate(['/library']);
    } else {
      alert("Wrong credentials, please try again.");
    }
    return false;
  }

  constructor(private _router: Router, private _route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
  }

}