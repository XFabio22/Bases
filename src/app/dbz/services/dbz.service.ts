
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

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

    // console.log('main page');
    // console.log(character);
    
    this.Characters.push(character);
  }


  onDeleteCharacter(index:number){
   this.Characters.splice(index,1); 
  }
    
}