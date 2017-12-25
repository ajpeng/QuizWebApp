import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule , MatInputModule, MatCardModule , MatListModule, MatToolbarModule} from '@angular/material';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import { QuestionsComponent} from './questions.component'
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'
import { QuizComponent } from './quiz.component'

const routes = [
  { path : '' , component: HomeComponent},
  { path : 'question' , component: QuestionComponent},
  { path : 'questions' , component: QuestionsComponent},
  { path : 'quiz' , component: QuizComponent}
]

@NgModule({
  declarations: [
    AppComponent , QuestionComponent, QuestionsComponent, HomeComponent, NavComponent, QuizComponent
  ],
  imports: [
    
    BrowserModule, BrowserAnimationsModule,RouterModule.forRoot(routes),
    MatButtonModule, MatInputModule, MatCardModule , MatListModule, MatToolbarModule,
    FormsModule , HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
