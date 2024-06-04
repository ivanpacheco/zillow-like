import { Component, Input } from '@angular/core';
import { Property } from '../../models/property';
import { ImageCardComponent } from "../image-card/image-card.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [ImageCardComponent]
})
export class CardComponent {

  @Input() property!: Property

}
