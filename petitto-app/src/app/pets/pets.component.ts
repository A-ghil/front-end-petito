import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  title = 'Pets'
  public pets = [
    { id: 1, nome: 'Petitto', doador: 'João Paulo',  descricao: 'Muito Carinhoso' , especie:"gato",      zap:"35214587"},
    { id: 2, nome: 'Gatuno',  doador: 'Ludmylla',    descricao: 'Muito Carinhoso',  especie:"cachorro",  zap:"36587874" },
    { id: 3, nome: 'Fiona',   doador: 'Samuel',      descricao: 'Muito Carinhoso',  especie:"cachorro",  zap:"65854578" },
    { id: 4, nome: 'Matuto',  doador: 'Diego',       descricao: 'Muito Carinhoso',  especie:"gato",      zap:"23564789" },
    { id: 5, nome: 'Rex',     doador: 'Ingryd',      descricao: 'Muito Carinhoso',  especie:"cachorro",  zap:"85458567" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
