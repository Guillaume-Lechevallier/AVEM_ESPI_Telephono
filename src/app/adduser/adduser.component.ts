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
  constructor() {}
  nom!: string;
  prenom!: string;
  idad!: string;
  numerolong!:string;
  user: user[] = [{value: 'Utilisateur', viewValue: 'Utilisateur'},
    {value: 'Type de valeurs 1', viewValue: 'Type de valeurs 1'},
    {value: 'Type de valeurs 2', viewValue: 'Type de valeurs 2'}];
  ngOnInit(): void {
  }
  changeClient(value: string) {
    console.log(value);
    var usertype = document.getElementById("userselected");
    var othertype = document.getElementById("otherselected");
    var errorusernotfund = document.getElementById("errorusernotfund");
    // @ts-ignore
    errorusernotfund.style.display = "none"
    if (value === "Utilisateur") {
      // @ts-ignore
      usertype.style.display = "block"
      // @ts-ignore
      othertype.style.display = "none"
    } else {
      // @ts-ignore
      usertype.style.display = "none"
      // @ts-ignore
      othertype.style.display = "block"
      // @ts-ignore

    }
    return value;
  }
  changenumerocourt(){
    // @ts-ignore
    var input = document.getElementById("numerocourt").value;
    // @ts-ignore
    var onlyletter = document.getElementById("numerocourt").value;
    this.numerolong = input;
    onlyletter = input.replace(/[^0-9]/,'')
    console.log("test")
  }
  confirmation(): void {
    this.nom = "Recherche d'un nom";
    this.prenom = "Recherche d'un prenom";
    this.idad = "test"
    var errorusernotfund = document.getElementById("errorusernotfund");
    // @ts-ignore
    errorusernotfund.style.display = "block"
    // @ts-ignore
    boutonconfirmer.disabled = "block";
  }
}
