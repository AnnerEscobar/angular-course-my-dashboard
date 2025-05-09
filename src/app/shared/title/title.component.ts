import { booleanAttribute, Component, Input, } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1 class="text-3xl mb-5">{{title}}</h1>
  `,
})
export class TitleComponent  {

  @Input({required: true}) title!: string;
}
