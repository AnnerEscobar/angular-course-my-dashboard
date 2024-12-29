import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A' | 'B' | 'F';

@Component({
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('F');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwick']);
  public frameworks2 = signal(['uno']);


  toogleContent() {
    this.showContent.update(value => !value);
  }

}
