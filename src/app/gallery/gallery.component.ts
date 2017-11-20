import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state, group } from '@angular/animations';

import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  
})

export class GalleryComponent implements OnChanges {
  title = "Customize Cakes & CupCake";
  visibleImages: any[] = [];
  state: string = 'small';

  @Input() filterBy?: string = 'all'

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }


  // ngOnInit() {
  // }

}
