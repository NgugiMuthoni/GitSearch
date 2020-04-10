import {Component, OnInit} from '@angular/core';
import { GitService } from './git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;

  constructor(private gitService: GitService) {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });

    this.gitService.gitRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }

  findProfile() {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });

    this.gitService.gitRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {

    this.gitService.updateUser('NgugiMuthoni');
    this.gitService.gitProfile().subscribe(profile => this.profile = profile);
    this.gitService.gitRepos().subscribe(repos =>  this.repos = repos);
  }

}
