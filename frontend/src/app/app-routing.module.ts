import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'news',component: NewsComponent
  },
  {
    path:'media',component:MediaComponent
  },
  {
    path:'settings',component:SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

