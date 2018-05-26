import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {

  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) {
  }

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
        return this.http.get<Rocket[]>(endpointUrl, {params: httpParams});
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
        return this.http.get<Capsule[]>(endpointUrl, {params: httpParams});
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
        return this.http.get<Launchpad[]>(endpointUrl, {params: httpParams});
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
        return this.http.get<CapsuleDetails[]>(endpointUrl, {params: httpParams});
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
        return this.http.get<CoreDetails[]>(endpointUrl, {params: httpParams});
      });
    }
    return this.http.get<CoreDetails[]>(endpointUrl);
  }

}
