import { Component } from '@angular/core';
import { FeatureCardComponent } from '../cards/feature-card/feature-card.component';
import { IFeature } from '../../shared/models/interfaces';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.scss',
})
export class FeaturesSectionComponent {
  features: IFeature[] = [
    {
      icon: 'basic-world',
      title: 'Explore the world',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
      icon: 'basic-compass',
      title: 'Meet Nature',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
      icon: 'basic-map',
      title: 'Find your way',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
    {
      icon: 'basic-heart',
      title: 'Live a healthier life',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.',
    },
  ];
}
