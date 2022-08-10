import { Component, OnInit } from '@angular/core';
import { GetIdeasService } from './get-ideas.service';
import { ideaFull } from './idea.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-get-ideas',
  templateUrl: './get-ideas.component.html',
  styleUrls: ['./get-ideas.component.scss'],
})
export class GetIdeasComponent implements OnInit {
  idea?: ideaFull;

  constructor(private getIdeasService: GetIdeasService) {}

  getFormattedPrice(price: number): string {
    if (price < 0.33) {
      return '$';
    } else if (price < 0.66) {
      return '$$';
    } else {
      return '$$$';
    }
  }

  getFormattedAccessibility(accessibility: number): string {
    if (accessibility < 0.5) {
      return 'easy';
    } else {
      return 'hard';
    }
  }

  fetchIdea() {
    this.getIdeasService
      .getIdeas()
      .pipe(
        map((data: ideaFull) => {
          data.formattedPrice = this.getFormattedPrice(data.price);
          data.formattedAccessibility = this.getFormattedAccessibility(data.accessibility);
          return data;
        })
      )
      .subscribe((data: ideaFull) => {
        this.idea = data;
      });
  }

  ngOnInit(): void {}
}
