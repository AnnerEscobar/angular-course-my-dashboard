import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum image"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
      class="bg-red-500 w-56 h-56"
      style="view-transition-name: hero2"
      >
      </div>


    </section>
  `,
})
export default class ViewTransitionComponent {}