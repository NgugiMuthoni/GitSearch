import { Component, OnInit } from '@angular/core';
import { GitService } from '../git/git.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;

  constructor(private gitService: GitService) {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      console.log(profile);
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
