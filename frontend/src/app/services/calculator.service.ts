import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public CALCULATOR_API = 'http://localhost:3000/api/calculator';
  constructor(private http: HttpClient, private authService:AuthService) { }

  suma(numbers):any{
    const token = this.authService.getToken();
    if(!token){
      return this.http.post(`${this.CALCULATOR_API}/suma`, numbers,{ headers:{'x-access-token':''}});
    }
    const val = this.http.post(`${this.CALCULATOR_API}/suma`, numbers,{ headers:{'x-access-token':token}});
    return val;
  }
}
