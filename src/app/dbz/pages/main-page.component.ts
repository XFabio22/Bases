import { Character } from './../interfaces/character.interface';
import { Component } from "@angular/core";


@Component({
  selector:'app-dbz-main-page',
  templateUrl:'main-page.component.html'
})

export class MainPageComponent {

  public Characters:Character[] = [{
    name:'Krilin',
    power:1000
  },
  {
    name:'Goku',
    power:9500
  },
  {
    name:'vegeta',
    power:7500
  }
];

  onNewCharacter(character :  Character):void{

    console.log('main page');
    console.log(character);
    
    

  }

}
