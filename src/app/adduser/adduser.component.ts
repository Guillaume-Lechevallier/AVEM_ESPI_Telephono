import {Component, OnInit} from '@angular/core';
interface user{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() {

  }
  nom!:string;
  prenom!:string;
  idad!:string;
  user: user[] = [{value: 'Utilisateur', viewValue: 'Utilisateur'},
    {value: 'Type de valeurs 1', viewValue: 'Type de valeurs 1'},
    {value: 'Type de valeurs 2', viewValue: 'Type de valeurs 2'}];
  usertype!:string;
  othertype!:string;



  ngOnInit(): void {
  }


  changeClient(value: string) {
    console.log(value);
    var usertype = document.getElementById("userselected");
    var othertype = document.getElementById("otherselected");

    if (value === "Utilisateur"){
      // @ts-ignore
      usertype.style.display = "block"
      // @ts-ignore
      othertype.style.display = "none"

    }else{
      // @ts-ignore
      usertype.style.display = "none"
      // @ts-ignore
      othertype.style.display = "block"
    }
    return value;
  }
  confirmation() : void{
    this.nom = "Recherche d'un nom";
    this.prenom = "Recherche d'un prenom";
    this.idad = "test"
  }


}
