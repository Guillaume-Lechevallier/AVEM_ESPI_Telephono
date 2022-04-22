import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() {

  }
  nom!:string;
  ngOnInit(): void {
  }
  confirmation() : void{
    this.nom = "finito";
  }
}
