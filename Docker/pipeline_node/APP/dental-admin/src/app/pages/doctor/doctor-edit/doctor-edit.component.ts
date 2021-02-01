import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { EspecialidadDataService } from 'src/app/services/especialidad-data.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  @Input() form: FormGroup;
  public doctor:Doctor;
  public listaespecialidad:any[];
  
  constructor(
    private fb: FormBuilder,
    private especialidadServices: EspecialidadDataService
  ) { 
    this.doctor = {
      id:0,
      nombre:'',
      dni:'',
      fechanacimiento:new Date(),
      colegiatura:'',
      registroesp:'',
      sexo:'M',
      idespecialidad:1,
      celular:'',
      email:'',
      idseguro:1,
      sueldo:0,
    }
  }

  ngOnInit(): void {
    this.getListEspecialidad();
  }

  public formConfig() {
    this.form = this.fb.group({
      nombre: [this.doctor.nombre, Validators.required],
      dni: [this.doctor.dni, Validators.required],
      fechanacimiento: [this.doctor.fechanacimiento, ""],
      colegiatura: [this.doctor.colegiatura, ""],
      registroesp: [this.doctor.registroesp, ""],
      sexo: [this.doctor.sexo, Validators.required],
      idespecialidad: [this.doctor.idespecialidad, Validators.required],
      celular: [this.doctor.celular, Validators.required],
      email: [this.doctor.email, Validators.required],
      idseguro: [this.doctor.idseguro, ""],
      sueldo: [this.doctor.sueldo, ""],
    });
  }

  getFormField(name: string) {
    return this.form.get(name);
  }

  getListEspecialidad(){
    this.especialidadServices.list("").toPromise()
    .then((data) =>{
      this.listaespecialidad = data;
    });
  }
}
