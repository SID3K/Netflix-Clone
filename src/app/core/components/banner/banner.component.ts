import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DescriptionPipe } from '../../../shared/pipes/description.pipe';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [DescriptionPipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnChanges {
  @Input({required:true}) bannerTitle = '';
  @Input() bannerOverview = '';
  @Input() bannerVideoKey = '';

  private sanitizer = inject(DomSanitizer);

  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.bannerVideoKey}?autoplay=1&mute=1&loop=1&controls=0`);

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['bannerVideoKey']){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.bannerVideoKey}?autoplay=1&mute=1&loop=1&controls=0`);

    }
  }

}
