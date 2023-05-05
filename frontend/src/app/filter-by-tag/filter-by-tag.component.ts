import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '../media/media.model';
// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import { FormControl } from '@angular/forms';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-by-tag',
  templateUrl: './filter-by-tag.component.html',
  styleUrls: ['./filter-by-tag.component.css']
})
export class FilterByTagComponent {
  @Input() photos!: Photo[];
  @Input() originalPhotos!: Photo[]; // Add ! to indicate that the property will be initialized later
  @Output() filteredPhotos = new EventEmitter<Photo[]>();

  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // tagCtrl = new FormControl('');
  // filteredTags: Observable<string[]>;
  tags: string[] = [];
  selectedTags: string[] = [];

  selectedValue: string = '';



  constructor() {}

  ngOnChanges() {
    // Get a list of all unique tags
    console.log("ngOnChanges: " + this.photos)
    console.log("ngOnChanges - Original Photos: " + this.originalPhotos)
    const allTags = this.photos.flatMap(photo => photo.tags);
    this.tags = Array.from(new Set(allTags));
  }

  onTagSelected(target: EventTarget | null) {
    console.log("onTagSelected: " + this.photos)

    if (!target) {
      return;
    }

    const selectElement = target as HTMLSelectElement;
    const tag = selectElement.value;

    let filteredPhotos: Photo[];

    if (tag) {
      // Add the selected tag to the list
      if (!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag);
      }

      // Filter photos by selected tags
      filteredPhotos = this.photos.filter(photo => this.selectedTags.every(tag => photo.tags.includes(tag)));
    } else {
      // Show all photos if no tag selected
      filteredPhotos = this.photos;
    }

    // Emit the filtered photos
    this.filteredPhotos.emit(filteredPhotos);
  }

  onTagRemoved(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);

    console.log("onTagRemoved: this.selectedTags: " + this.selectedTags)
    let filteredPhotos: Photo[];

    if (this.selectedTags.length === 0) {
      // Show all photos if no tags selected
      console.log("onTagRemoved if(length===0) " + this.photos)
      filteredPhotos = this.originalPhotos;
    } else {
      // Filter photos by selected tags
      filteredPhotos = this.originalPhotos.filter(photo => {
        return this.selectedTags.some(tag => photo.tags.includes(tag));
      });
    }

    // Emit the filtered photos
    this.filteredPhotos.emit(filteredPhotos);

    this.selectedValue = ''
  }
}
