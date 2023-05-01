import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';
import { CreateOfficerComponent } from './create-officer/create-officer.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

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
    path:'create-officer',component:CreateOfficerComponent
  },
  {
    path:'upload-photo',component:UploadPhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

