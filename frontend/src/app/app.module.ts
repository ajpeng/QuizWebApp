import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule , MatInputModule, MatCardModule , MatListModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component'
import { ApiService } from './api.service'
import { QuestionsComponent} from './questions.component'
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'
import { QuizComponent } from './quiz.component'
import { QuizzesComponent } from './quizzes.component'
import { RegisterComponent} from './register.component'
import { AuthService} from './auth.service'
import { AuthIntercepter} from './auth.interceptor'


const routes = [
  { path : '' , component: HomeComponent},
  { path : 'question' , component: QuestionComponent},
  { path : 'question/:quizId' , component: QuestionComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'quiz' , component: QuizComponent},
  { path : 'quizzes' , component: QuizzesComponent}
]

@NgModule({
  declarations: [
    AppComponent , QuestionComponent, QuestionsComponent, HomeComponent, NavComponent, QuizComponent,
    QuizzesComponent , RegisterComponent
  ],
  imports: [
    
    BrowserModule, BrowserAnimationsModule,RouterModule.forRoot(routes),
    MatButtonModule, MatInputModule, MatCardModule , MatListModule, MatToolbarModule,
    FormsModule ,ReactiveFormsModule,  HttpClientModule
  ],
  providers: [ApiService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthIntercepter,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
