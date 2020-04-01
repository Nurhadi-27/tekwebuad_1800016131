import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Praktikum3Component } from './pages/praktikum3/Praktikum3.Component';
import { Praktikum4Component } from './pages/praktikum4/Praktikum4.Component';
import { Praktikum5Component } from './pages/praktikum5/Praktikum5.Component';
import { Praktikum6Component } from './pages/praktikum6/Praktikum6.Component';
import { Praktikum7Component } from './pages/praktikum7/Praktikum7.Component';
import { Praktikum8Component } from './pages/praktikum8/Praktikum8.Component';
import { Praktikum9Component } from './pages/praktikum9/Praktikum9.Component';
import { Praktikum10Component } from './pages/praktikum10/Praktikum10.Component';

const routes: Routes = [
      {
       path: 'praktikum3',
       component:Praktikum3Component
      },
      {
       path: 'praktikum4',
       component:Praktikum4Component
      },
      {
       path: 'praktikum5',
       component:Praktikum5Component
      },
      {
       path: 'praktikum6',
       component:Praktikum6Component
      },
      {
       path: 'praktikum7',
       component:Praktikum7Component
      },
      {
       path: 'praktikum8',
       component:Praktikum8Component
      },
      {
       path: 'praktikum9',
       component:Praktikum9Component
      },
      {
       path: 'praktikum10',
       component:Praktikum10Component
      }
];      

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
