import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { ComponentComponent } from './component/component.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Home' , component:HomeComponent},
  {path:'Galary' , component:GalaryComponent},
  {path:'About-us' , component:AboutComponent},
  {path:'services' , component:ServicesComponent},
  {path:'feature' , component:FeaturesComponent},
  {path:'Components',component:ComponentComponent},
  {path:'blog',component:BlogComponent},
  {path:'blogDetail',component:BlogDetailComponent},
  {path:'Contact',component:ContactComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
