import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public age:number = 45;

  get capitalizedName():string {
    return  this.name.toLocaleUpperCase();
  }

  getHeroDescripcion():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'batman';
  }

  changeAge(){
    this.age = 50;
  }

  resetForm():void{
  this.name= 'iroman';
  this.age = 45;

  document.querySelectorAll('h1')!.forEach(element =>{
    element.innerHTML='<h1>Desde Angular</h1>';
  })
  }
}
