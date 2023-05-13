import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { TodoserviceService } from './todoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
