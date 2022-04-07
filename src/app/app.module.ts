import { AnimeService } from './service/anime.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeAddComponent } from './anime-add/anime-add.component';
import { AnimeEditComponent } from './anime-edit/anime-edit.component';
import { AnimeGetComponent } from './anime-get/anime-get.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimeAddComponent,
    AnimeEditComponent,
    AnimeGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
