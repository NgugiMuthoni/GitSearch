import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;
  private apiUrl = 'https://api.github.com/users/';
  public apiKey = environment.Git_Secret;

  gitProfile(){
    return this.http.get(this.apiUrl + this.username + '?access_token=' + this.apiKey);
  }

  gitRepos() {
    return this.http.get(this.apiUrl + this.username + '/repos' + '?access_token=' + this.apiKey);
  }

  constructor(private http: HttpClient) {
    // console.log('GitService Ready');
    this.username = 'NgugiMuthoni';
  }

  updateUser(username: string) {
    this.username = username;
  }
}
