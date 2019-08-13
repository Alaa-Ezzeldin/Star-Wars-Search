import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // { path: "", component: AppComponent,
    { path: 'search', component: HomeComponent,
    children: [
      {path: ':input', component: SearchComponent }
    ]
    },{
    path: '**', 
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
