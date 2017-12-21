import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TodosModule } from './todos/todos.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    TodosModule
  ],
  providers: [
    { provide: 'api', useValue: 'http://jsonplaceholder.typicode.com/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
