import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['numero', 'numerocourt', 'iduser', 'typeuser', 'boutonmodifier', 'boutonsupprimer'];
  dataSource = new MatTableDataSource<Showuser>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {

  }


}
export interface Showuser {
  numero: string;
  numerocourt: string;
  iduser: string;
  typeuser: string;
  boutonmodifier: string;
  boutonsupprimer : string;
}

const ELEMENT_DATA: Showuser[] = [
    //
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},
  {numero: '0000000000', numerocourt: '000000', iduser: "j.doe",typeuser:"Utilisateur", boutonmodifier: 'H', boutonsupprimer:'H'},


];