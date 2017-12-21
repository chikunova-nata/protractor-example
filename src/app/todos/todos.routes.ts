import { Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
export const routeConfig: Routes = [
  // {
  //   path: '', redirectTo: 'todos', pathMatch: 'full'
  // },
  // {
  //   path: 'todos', component: TodoListComponent
  // }
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: ':status', component: TodoListComponent }
];
