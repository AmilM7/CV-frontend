import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Skill} from "../models/Skills";
import {SkillServices} from "../service/skills.service";


@Injectable({providedIn: 'root'})
export class SkillsResolver implements Resolve<Skill[]> {

  constructor(private skillServices: SkillServices) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Skill[]> | Promise<Skill[]> | Skill[] {
    return this.skillServices.getSkills();
  }
}
