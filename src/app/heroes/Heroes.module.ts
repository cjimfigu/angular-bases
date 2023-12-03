

import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [CommonModule]
})

export class HeoresModule {}
