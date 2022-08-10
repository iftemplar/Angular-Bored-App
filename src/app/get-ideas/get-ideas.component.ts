import { Component, OnInit } from '@angular/core';
import { GetIdeasService } from './get-ideas.service';
import { ideaFull } from './idea.model';

@Component({
  selector: 'app-get-ideas',
  templateUrl: './get-ideas.component.html',
  styleUrls: ['./get-ideas.component.scss'],
})
export class GetIdeasComponent implements OnInit {
  idea?: ideaFull;

  constructor(private getIdeasService: GetIdeasService) {}

  fetchIdea() {
    this.getIdeasService.getIdeas().subscribe((data) => {
      this.idea = data;
      console.log(this.idea);
    });
  }

  ngOnInit(): void {}
}
