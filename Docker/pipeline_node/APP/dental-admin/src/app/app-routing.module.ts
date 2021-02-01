import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitaComponent } from './pages/cita/cita.component';
import { DoctorEditComponent } from './pages/doctor/doctor-edit/doctor-edit.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MainComponent } from './pages/main/main.component';
import { PacienteComponent } from './pages/paciente/paciente.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'doctor', component: DoctorComponent },
      { path: 'doctor/add', component: DoctorEditComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'cita', component: CitaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
