import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';


const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () => import('@layouts/main-layout/main-layout.module').then(mod => mod.MainLayoutModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
