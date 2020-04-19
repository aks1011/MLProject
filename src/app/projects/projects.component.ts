import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    const p1 = { id: '1', projectName: 'Demo project' };
    const p2 = { id: '1', projectName: 'Demo project' };
    const p3 = { id: '1', projectName: 'Demo project' };
    const p4 = { id: '1', projectName: 'Demo project' };
    const p5 = { id: '1', projectName: 'Demo project' };
    const p6 = { id: '1', projectName: 'Demo project' };

    this.projectList.push(p1);
    this.projectList.push(p2);
    this.projectList.push(p3);
    this.projectList.push(p4);
    this.projectList.push(p5);
    this.projectList.push(p6);
  }

  new(e) {
    this.router.navigateByUrl('/transactions');
  }
  view(e) {
    this.router.navigateByUrl('/transactions');
  }

}
