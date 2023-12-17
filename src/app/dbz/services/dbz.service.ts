import { Character } from '../interfaces/character.interface';
import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid' ;



@Injectable({providedIn: 'root'})
export class DbzService {

    public characters:Character[] = [{
    id: uuid(),
    name:'Krilin',
    power:1000
  },
  {
    id: uuid(),
    name:'Goku',
    power:9500
  },
  {
    id: uuid(),
    name:'vegeta',
    power:7500
  }
];

  addCharacter(character :  Character):void{

    const newCharacter : Character={ id: uuid(),...character};
    ///Lo que le digo es que cree un ID , y que tome sus propiedades 
    //y las esparza en este nuevo objeto, para no poner todas las propiedades 1 a 1
    this.characters.push(newCharacter);
    
  }


//   onDeleteCharacter(index:number){
//    this.Characters.splice(index,1); 
//   }
DeleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id   
    );


  }
}