import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import SharedModule from '../shared/shared.module';
import YoutubeService from '../youtube/services/youtube.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export default class CoreModule {}
