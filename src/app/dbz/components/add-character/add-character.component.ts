import { Character } from './../../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name:'',
    power:0
  }

  emitCharacter():void{
    console.log(this.character);
    
  }

}
