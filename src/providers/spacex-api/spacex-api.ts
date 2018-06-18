import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError } from 'rxjs/operators';
import { Launch } from '../../app/Models/Launch';
import { CompanyInfo } from '../../app/Models/CompanyInfo';
import { Rocket } from '../../app/Models/Rocket';
import { Capsule } from '../../app/Models/Capsule';
import { CapsuleDetails } from '../../app/Models/CapsuleDetails';
import { CoreDetails } from '../../app/Models/CoreDetails';
import { Launchpad } from '../../app/Models/Launchpad';
import { CompanyHistory } from '../../app/Models/CompanyHistory';

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {

  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) { }

  getAllLaunches(params?: any): Observable<Launch[]> {
    const endpointUrl = `${this.baseUrl}/launches`;
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
        return this.http.get<Launch[]>(endpointUrl, { params: httpParams });
      });
    }
    return this.http.get<Launch[]>(endpointUrl);
  }

  getAllRockets(params?: string): Observable<Rocket[]> {
    const endpointUrl = `${this.baseUrl}/rockets`;
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
        return this.http.get<Rocket[]>(endpointUrl, { params: httpParams });
      });
    }
    return this.http.get<Rocket[]>(endpointUrl);
  }

  getAllCapsules(params?: string): Observable<Capsule[]> {
    const endpointUrl = `${this.baseUrl}/capsules`;
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
        return this.http.get<Capsule[]>(endpointUrl, { params: httpParams });
      });
    }
    return this.http.get<Capsule[]>(endpointUrl);
  }

  getAllLaunchpads(params?: string): Observable<Launchpad[]> {
    const endpointUrl = `${this.baseUrl}/launchpads`;
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
        return this.http.get<Launchpad[]>(endpointUrl, { params: httpParams });
      });
    }
    return this.http.get<Launchpad[]>(endpointUrl);
  }

  getAllCapsuleDetails(params?: string): Observable<CapsuleDetails[]> {
    const endpointUrl = `${this.baseUrl}/parts/caps`;
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
        return this.http.get<CapsuleDetails[]>(endpointUrl, { params: httpParams });
      });
    }
    return this.http.get<CapsuleDetails[]>(endpointUrl);
  }

  getAllCoreDetails(params?: string): Observable<CoreDetails[]> {
    const endpointUrl = `${this.baseUrl}/parts/cores`;
    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
        return this.http.get<CoreDetails[]>(endpointUrl, { params: httpParams });
      });
    }
    return this.http.get<CoreDetails[]>(endpointUrl);
  }

  getCompanyInfo(): Observable<CompanyInfo> {
    const endpointUrl = `${this.baseUrl}/info`;
    return this.http.get<CompanyInfo>(endpointUrl); 
  }

  getCompanyHistory(): Observable<CompanyHistory> {
    const endpointUrl = `${this.baseUrl}/info/history`;
    return this.http.get<CompanyHistory>(endpointUrl); 
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw('Something bad happened; please try again later.');
  }

}
