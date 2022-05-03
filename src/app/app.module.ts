import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutMeComponent } from "./features/about-me/about-me.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { JourneyComponent } from "./features/journey/journey.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    JourneyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
