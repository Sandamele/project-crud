import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  uri ='http://localhost:4000/anime';
  constructor(private http: HttpClient) { }

  addAnime(animeTitle: any,animePlotSummary: any,animeGender: any,animeReleased: any,animeStatus: any){
    const animeObj = {
      animeTitle: animeTitle,
      animePlotSummary: animePlotSummary,
      animeGender: animeGender,
      animeReleased: animeReleased,
      animeStatus: animeStatus,
    };
    console.log(animeObj);
    this.http.post(`${this.uri}/add`, animeObj).subscribe(res=>console.log('Done'));
  }
}
