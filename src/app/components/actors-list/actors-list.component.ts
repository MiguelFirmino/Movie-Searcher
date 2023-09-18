import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actors } from 'src/app/models/Actors';
import { ActorsListService } from 'src/app/services/actors-list.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss'],
})
export class ActorsListComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private actorListService: ActorsListService
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
