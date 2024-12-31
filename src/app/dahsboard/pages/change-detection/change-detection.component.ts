import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div>
  <app-title [title]="currentFramework()"></app-title>
</div>

  <pre>{{frameworkAsProperty | json}}</pre>
  <pre>{{frameworkAsSignal() | json}}</pre>
  `
})
export default class ChangeDetectionComponent {


  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016',
  };

  constructor() {
    setTimeout(() => {

      this.frameworkAsSignal.update( value =>({
        ...value,
        name: 'React'
      }));

      console.log('Hecho')
    }, 3000);
  }


}
