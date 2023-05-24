import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { ExportModule } from './export/export/export.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { SlidemenuComponent } from './common/slidemenu/slidemenu.component';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property/property.component';
import { TenantsComponent } from './tenants/tenants.component';
import { TableComponent } from './common/table/table.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { MapSelectorComponent } from './common/map-selector/map-selector.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoginComponent, PageNotFoundComponent, ProfileComponent, DashboardComponent, SlidemenuComponent, PropertyComponent, TenantsComponent, TableComponent, AddPropertyComponent, MapSelectorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ExportModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
