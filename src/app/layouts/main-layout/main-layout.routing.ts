import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@routes/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'statistics',
    loadChildren: () => import('@routes/statistics/statistics.module').then((mod) => mod.StatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule { }
