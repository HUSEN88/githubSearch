import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class ProfileService {

	private clientId = '80771a1a1f584d5b1103';
	private clientSecret = '6d03ca7c379f4272560b35b5c935a954928f1d66';

 	 constructor( private http: HttpClient ) { }

  getProfileInfo(username){
  	return this.http.get("https://api.github.com/users/" + username + "?client_id=" + 
      this.clientId + "&client_secret=" + this.clientSecret);
  }
  getProfileRepos(username){
  	return this.http.get("https://api.github.com/users/" + username + "/repos?client_id=" + 
      this.clientId + "&per_page=100&type=owner&client_secret=" + this.clientSecret);
  }

  
  getRepos(reponame, language){
    return this.http.get("https://api.github.com/search/repositories?q=" + 
      reponame + "+language%3A" + language + "&client_id=" + 
      this.clientId + "&per_page=100&type=owner&client_secret=" + this.clientSecret)
  }
}

 

