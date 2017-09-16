import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceholderComponent } from './../components/placeholder/placeholder.component';
import { UserListComponent } from './../components/user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'placeholder', component: PlaceholderComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }