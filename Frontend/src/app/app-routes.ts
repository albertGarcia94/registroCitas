import{RouterModule,Routes} from '@angular/router'

import { PagesComponent } from './pages/pages.component'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { ProgressComponent } from './pages/progress/progress.component'
import { Graficas1Component } from './pages/graficas1/graficas1.component'
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component'
import { RegistroComponent } from './login/registro/registro.component'


const appRoutes: Routes=[
 {
     path:'',
     component:PagesComponent,
     children:[
        {path:'registrer',component:LoginComponent},
        {path:'dashboard',component:DashboardComponent},
        {path:'progress', component:ProgressComponent},
        {path:'graficas1',component:Graficas1Component},
        {path:'',redirectTo:'/dashboard', pathMatch:'full'}
     ]
    },
 {path:'login',component:LoginComponent},
 {path:'registro',component:RegistroComponent},
 {path:'registrer',component:LoginComponent},
 {path:'progress', component:ProgressComponent},
 {path:'graficas1',component:Graficas1Component},
 {path:'',redirectTo:'/dashboard',pathMatch:'full'},
 {path:'**',component:NopagesfoundComponent}
]; 

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true})