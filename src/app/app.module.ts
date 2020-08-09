import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule}from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule }from '@angular/material/menu';
import { MatDialogModule }from '@angular/material/dialog';
import { MatExpansionModule }from '@angular/material/expansion';
import { MatCardModule }from '@angular/material/card';
import { MatListModule }from '@angular/material/list';
import { MatIconModule }from '@angular/material/icon';
import { MatInputModule } from  '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { IndiaComponent } from './dashboard/india/india.component';
import { UsComponent } from './dashboard/us/us.component';
import { ApiService } from './services/api.service';
import { BrazilComponent } from './dashboard/brazil/brazil.component';
import { RussiaComponent } from './dashboard/russia/russia.component';
import { ChartsModule } from 'ng2-charts';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ChartComponent,
    IndiaComponent,
    UsComponent,
    BrazilComponent,
    RussiaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule, 
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
