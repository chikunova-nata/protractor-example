import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routeConfig } from './todos.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoStoreService } from './models/todo-store.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoStoreService
  ],
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoFooterComponent
  ]
})
export class TodosModule {}
