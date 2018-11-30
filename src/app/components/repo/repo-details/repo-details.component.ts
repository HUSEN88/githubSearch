import { Component, OnInit,Input } from '@angular/core';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
@Input() repoList:any;
  constructor( private profileService : ProfileService) { }

  ngOnInit() {
  	
  }

  


  

}
