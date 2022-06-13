import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Skill} from "../models/Skills";

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})
export class RightPartComponent implements OnInit {

  @Input()
  public allSkills: Skill [] = [];

  constructor(private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

}
