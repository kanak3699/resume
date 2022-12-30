import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'; // 1. Importing Tab Module for Home Page
import { MatChipsModule } from '@angular/material/chips'; // 2. Importing Chips Module for Home Page
import { MatFormFieldModule } from '@angular/material/form-field'; // 3. Importing Mat Form Field Module for App Component HTML
import { MatIcon, MatIconModule } from '@angular/material/icon'; // 4. Importing Mat Icon Module for App Component HTML
import { MatAutocompleteModule } from '@angular/material/autocomplete'; // 5. Importing Mat Icon Module for App Component HTML
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component'; // 6. Importing for formControl
@NgModule({
  declarations: [AppComponent, ProjectsComponent, WorkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, // Tab Module for Home Page
    MatChipsModule, // Chips Module for Projects Page
    MatFormFieldModule, // Mat Form File for Form in App Component HTML File
    MatIconModule, // Mat Icon Modulein the Form for App Component HTML File
    MatAutocompleteModule, // Mat Auto Complete Module for Form ib App Component HTML File
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
