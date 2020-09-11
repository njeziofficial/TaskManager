import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoOfTeamMembers: number = 67;
  TotalCostOfAllProjects = 240;
  PendingTasks: number = 15;
  UpcomingProjects: number = 2;
  ProjectCost: number = 100000
  AvailableFunds: number;
  CurrentExpenditure: number;

  // Arrays
  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  ngOnInit(): void {
    this.Designation = "Team Lead";
    this.Username = "Adam Warlock";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;
    this.ProjectCost = 25000;
    this.CurrentExpenditure = 96773;
    this.AvailableFunds = 53552;
    this.Clients = ["ABC Hub", "DEF Software Solutions", "GHI Tech Industries"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D", "Project E"];
    for (let index = 2020; index >= 2010; index--) {
      this.Years.push(index);
      this.TeamMembersSummary = [
        { Region: "East", TeamMembersCount: 20, TemporarilyAvailableMembers: 4 },
        { Region: "West", TeamMembersCount: 15, TemporarilyAvailableMembers: 8 },
        { Region: "South", TeamMembersCount: 17, TemporarilyAvailableMembers: 1 },
        { Region: "North", TeamMembersCount: 15, TemporarilyAvailableMembers: 6 }
      ];
      this.TeamMembers = [
        //East
        { Region: "East", Members: [{ ID: 1, Name: "Daniel", Status: "Available" }, { ID: 2, Name: "Derrick", Status: "Available" }, { ID: 3, Name: "Charles", Status: "Busy" }, { ID: 4, Name: "Donnie", Status: "Busy" }] },
        //South
        { Region: "South", Members: [{ ID: 1, Name: "John", Status: "Busy" }, { ID: 2, Name: "Jammie", Status: "Available" }, { ID: 3, Name: "Charles", Status: "Busy" }, { ID: 4, Name: "Freddy", Status: "Available" }] },
        //West
        { Region: "West", Members: [{ ID: 1, Name: "Cyrax", Status: "Busy" }, { ID: 2, Name: "Scorpion", Status: "Available" }, { ID: 3, Name: "Liu Kang", Status: "Available" }, { ID: 4, Name: "Sonya", Status: "Available" }] },
        //North
        { Region: "North", Members: [{ ID: 1, Name: "Jerry", Status: "Busy" }, { ID: 2, Name: "Thomas", Status: "Available" }, { ID: 3, Name: "Stan", Status: "Busy" }, { ID: 4, Name: "Geremi", Status: "Busy" }] }

      ]
    }
  }
  onProjectChange($event) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 245000;
      this.CurrentExpenditure = 7800;
      this.AvailableFunds = 90;
    }
    else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 568000;
      this.CurrentExpenditure = 45000;
      this.AvailableFunds = 8000;
    }

    else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 568000;
      this.CurrentExpenditure = 45000;
      this.AvailableFunds = 8000000;
    }
    else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost = 900000;
      this.CurrentExpenditure = 567433;
      this.AvailableFunds = 200;
    }
  }
}
    