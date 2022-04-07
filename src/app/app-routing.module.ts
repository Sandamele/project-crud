import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeAddComponent } from './anime-add/anime-add.component';
import { AnimeGetComponent } from './anime-get/anime-get.component';
import { AnimeEditComponent } from './anime-edit/anime-edit.component';
const routes: Routes = [
  {path: '', redirectTo: '/anime', pathMatch: 'full'},
  { path: 'anime/create', component: AnimeAddComponent },
  { path: 'anime/edit/:id', component: AnimeEditComponent },
  { path: 'anime', component: AnimeGetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
