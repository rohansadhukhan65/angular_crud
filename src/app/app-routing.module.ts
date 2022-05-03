import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// impoting components .....
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from "./pages/about/about.component";
import { ViewTableComponent } from './components/view-table/view-table.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"add",
    component:CreateComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },

  // child route example...
  {
    path:"about-us",
    component:AboutComponent,
    children:[
      {
        path:"child",
        component:ViewTableComponent
      }
    ]
  },
  {
    path:"contact-us",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
