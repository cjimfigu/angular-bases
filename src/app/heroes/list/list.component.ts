import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spinderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;

  removeLasHero(): void{
   this.deleteHero= this.heroNames.pop();
  }
}
