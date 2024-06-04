import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'property/:slug-name', loadComponent:() => import('./pages/slug/slug.component').then(mod=> mod.SlugComponent)},
    {path: '', loadComponent:() => import('./pages/home/home.component').then(mod=> mod.HomeComponent)},
]
