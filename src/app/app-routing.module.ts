import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./features/about-me/about-me.component";
import { HomeComponent } from "./features/home/home.component";
import { JourneyComponent } from "./features/journey/journey.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { SkillsComponent } from "./features/skills/skills.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "home", component: HomeComponent }],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about-me", component: AboutMeComponent },
  { path: "journey", component: JourneyComponent },
  { path: "skills", component: SkillsComponent },
  { path: "projects", component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
