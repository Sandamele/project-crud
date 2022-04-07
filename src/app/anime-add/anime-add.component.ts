import { AnimeService } from './../service/anime.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-anime-add',
  templateUrl: './anime-add.component.html',
  styleUrls: ['./anime-add.component.css']
})
export class AnimeAddComponent implements OnInit {
  [x: string]: any;

  animeForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createAnimeForm();
  }

  createAnimeForm(){
    this.animeForm = this.fb.group({
      animeTitle: ['', Validators.required],
      animePlotSummary: ['', Validators.required],
      animeGender: ['', Validators.required],
      animeReleased: ['', Validators.required],
      animeStatus: ['', Validators.required],
    })
  }

  addAnime(data:any){

    console.log(data.animeTitle);
  }

  ngOnInit(): void {
  }

}

// animeForm = new FormGroup({
//   animeTitle: new FormControl('', Validators.required),
//   animePlotSummary: new FormControl('', Validators.required),
//   animeGender: new FormControl('', Validators.required),
//   animeReleased: new FormControl('', Validators.required),
//   animeStatus: new FormControl('', Validators.required),
// });
