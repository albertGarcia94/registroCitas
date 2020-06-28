import{RouterModule,Routes} from '@angular/router'

import { LoginComponent } from './login/login.component'
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component'
import { RegistroComponent } from './login/registro/registro.component'


const appRoutes: Routes=[
 {path:'login',component:LoginComponent},
 {path:'registro',component:RegistroComponent},
 {path:'**',component:NopagesfoundComponent}
]; 

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true})