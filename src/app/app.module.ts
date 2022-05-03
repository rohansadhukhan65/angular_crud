import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ViewTableComponent } from './components/view-table/view-table.component';
import { FormComponent } from './components/form/form.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewTmpComponent } from './new-tmp/new-tmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    ContactComponent,
    ViewTableComponent,
    FormComponent,
    NewCmpComponent,
    NewTmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
