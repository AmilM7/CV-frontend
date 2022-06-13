import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Skill} from "../models/Skills";
import {environment} from "../../environments/environment";


@Injectable()
export class SkillServices {

  private readonly baseUrl: string = environment.backendUrl + "/skills";

  constructor(private http: HttpClient) {
  }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl);
  }

}
