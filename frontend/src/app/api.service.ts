import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient){}

    getQuestions(question){
        return this.http.get('http://localhost:64637/api/questions');
    }

    postQuestion(question){
        this.http.post('http://localhost:64637/api/questions',question).subscribe(res => {
            console.log(res)
        })
    }
}