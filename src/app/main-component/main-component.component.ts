import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Skill} from "../models/Skills";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  public allSkills: Skill [] = [];

  constructor(private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.allSkills = response["Skills"];
    });
  }

}
