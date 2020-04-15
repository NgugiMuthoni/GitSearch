import { Component, OnInit } from '@angular/core';
import { GitService } from '../git/git.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile: any;
  username: string;
  constructor(private gitService: GitService) {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
  }

  findProfile() {
    this.gitService.updateUser(this.username);
    this.gitService.gitProfile().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });
  }

  ngOnInit() {

    this.gitService.updateUser('NgugiMuthoni');
    this.gitService.gitProfile().subscribe(profile => this.profile = profile);
  }

}
