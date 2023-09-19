import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actors } from 'src/app/models/Actors.model';
import { ActorsPageService } from 'src/app/services/actors-page.service';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.scss'],
})
export class ActorsPageComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private actorListService: ActorsPageService
  ) {
    router.params.subscribe((params) => {
      this.actorId = params['id'];
    });
  }

  actorId: string = '';
  actorName: string = '';
  actorProfession: string = '';
  knownForTitles: string[] = [];

  ngOnInit(): void {
    this.actorListService.getActorById(this.actorId).subscribe((data: Actors) => {
      let actor = data.results;
      this.actorName = actor.primaryName;
      this.actorProfession = actor.primaryProfession;
      this.knownForTitles = actor.knownForTitles.split(',');
    });
  }
}
