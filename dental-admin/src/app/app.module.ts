import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoadingComponent } from './layout/loading/loading.component';
import { MainComponent } from './pages/main/main.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { CitaComponent } from './pages/cita/cita.component';
import { DoctorEditComponent } from './pages/doctor/doctor-edit/doctor-edit.component';
import { ApiBackRequestService } from './services/api/api-back-request.service';
import { DoctorService } from './services/api/doctor.service';
import { DoctorDataService } from './services/doctor-data.service';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { EspecialidadService } from './services/api/especialidad.service';
import { EspecialidadDataService } from './services/especialidad-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoadingComponent,
    SidebarComponent,
    DoctorComponent,
    PacienteComponent,
    CitaComponent,
    DoctorEditComponent
  ],
  exports:[
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    ApiBackRequestService,
    DoctorDataService,
    DoctorService,
    EspecialidadDataService,
    EspecialidadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
