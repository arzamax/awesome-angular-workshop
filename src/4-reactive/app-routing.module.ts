import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: () => import('4-reactive/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'villains',
    loadChildren: () => import('4-reactive/villains/villains.module').then(m => m.VillainsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
