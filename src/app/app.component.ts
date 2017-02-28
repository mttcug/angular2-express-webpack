import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiResult:any={};
  errorMessage: string

  constructor(private http: Http) { };

  getVersion(): Observable<any> {
    return this.http.get("/api/v1/version")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let content = res.json();
    return content || {};
  };

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  };

  ngOnInit() {
    this.getVersion().subscribe(
      (version) => {        
        this.apiResult = version;        
      },
      (error) => this.errorMessage = error
    );
  }
}
