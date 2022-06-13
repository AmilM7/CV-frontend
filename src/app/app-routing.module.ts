import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RightPartComponent} from "./right-part/right-part.component";
import {LeftPartComponent} from "./left-part/left-part.component";
import {SkillsResolver} from "./resolver/skills.resolver";
import {MainComponentComponent} from "./main-component/main-component.component";


const routes: Routes = [
  {
    path: "", component: MainComponentComponent,
    resolve: {
      ["Skills"]: SkillsResolver,
    }
  },
]

@NgModule({
  imports: [
    [RouterModule.forRoot(routes, {useHash: true})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
