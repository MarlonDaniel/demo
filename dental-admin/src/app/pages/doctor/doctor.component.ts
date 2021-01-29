import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorDataService } from 'src/app/services/doctor-data.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  public lista:Doctor[] = [];

  constructor(
    private router: Router,
    private doctorService: DoctorDataService,
  ) { }

  ngOnInit(): void {
    this.getList("");
  }

  getList(nombre:string){
    this.doctorService.list(nombre).toPromise()
    .then((data) =>{
      this.lista = data;
    });
  }
}
