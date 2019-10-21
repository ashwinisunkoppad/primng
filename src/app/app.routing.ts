import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainbarComponent } from './mainbar/mainbar.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
// import { MenuComponent } from './menu/menu.component';
// import { MainbarComponent } from './mainbar/mainbar.component';


const routes: Routes = [
  // {path:'',component:MainbarComponent},
  {path:'service',component:ServiceComponent},

  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
