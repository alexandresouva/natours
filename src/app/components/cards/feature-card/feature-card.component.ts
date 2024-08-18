import { Component, input } from '@angular/core';
import { IFeature } from '../../../shared/models/interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss',
})
export class FeatureCardComponent {
  feature = input.required<IFeature>();
}
