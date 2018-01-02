import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

    constructor(private http: HttpClient , private router: Router ) {}

    get isAuthenticated() {
        return !!localStorage.getItem('token')
    }

    register(credentials){
        this.http.post<any>(`http://localhost:64637/api/account`, credentials).subscribe(res =>{
            this.authenicate(res)
        })
    }

    login(credentials){
        this.http.post<any>(`http://localhost:64637/api/account/login`, credentials).subscribe(res =>{
           this.authenicate(res)
        })
    }

    authenicate(res){
        localStorage.setItem('token', res)
        this.router.navigate(['/'])
    }

    logout() {
        localStorage.removeItem('token')
    }
}