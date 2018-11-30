import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
	repos:any;
  constructor(private profileService : ProfileService) {  }

  ngOnInit(){}

  findRepo(reponame,language){
		this.profileService.getRepos(reponame,language).subscribe(repos => {
	  	console.log(repos);
	  	this.repos = repos;
  	})  
  }
}
