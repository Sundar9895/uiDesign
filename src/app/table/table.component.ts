import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  students:any=[{
    "stuName": "Ram",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "86%"
  },
  {
    "stuName": "Raj",
    "yop": "2016",
    "status": "PASS",
    "dept": "ECE",
    "markAvg": "79%"
  },
  {
    "stuName": "Vino",
    "yop": "2016",
    "status": "PASS",
    "dept": "MECH",
    "markAvg": "90%"
  },
  {
    "stuName": "Selva",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "rahul",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "Anu",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "Roja",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "Shobana",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "Ram",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "Mathu",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "Bibin",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "pravin",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  },
  {
    "stuName": "kumar",
    "yop": "2016",
    "status": "PASS",
    "dept": "CSE",
    "markAvg": "85%"
  }]

  constructor() { }

  ngOnInit() {
  }

}
