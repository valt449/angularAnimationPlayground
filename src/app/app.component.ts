import { Component } from "@angular/core";
import { trigger, state, style, transition, keyframes, animate,  } from "@angular/animations";


@Component({
  selector: 'app-root',
  template: `<button [@myTrigger]='state' (click)='toogle()'> Mybutton</button>
  <ul>
    <li *ngFor="let item of items" [@myTrigger]='state'>{{item}}</li>
  </ul>
  `,
  styles: ['button { margin: 60px;}'],
  animations: [
    trigger('myTrigger', [
          state('small', style({
            transform: 'scale(1)'            
          })),
          state('large', style({
            transform: 'scale(2)'
          })),
          state('fadeIn', style({
            opacity: 1
          })),
          //transition('* <=> *', animate('300ms ease-out')),
          transition('void => *', [
            style({opacity: '0', transform: 'translateY(30px)' }),
            animate('300ms')
          ])
  ])
]
})
export class AppComponent  { 
  name = 'Angular'; 
  state: string = 'fadeIn';
  items = ['item1', 'item2', 'item3'];


  public toogle() {
    //this.state = (this.state === 'small' ? 'large' : 'small');
    this.items.push('Anopther item');
  }
}
