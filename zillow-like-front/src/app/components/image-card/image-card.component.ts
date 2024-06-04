import { Component, Input } from '@angular/core';
import { Image } from '../../models/property';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {

  @Input() image!: Image
  @Input() size:any


}
