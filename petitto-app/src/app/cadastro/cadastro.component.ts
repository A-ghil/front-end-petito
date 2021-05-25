import { Component, OnInit } from '@angular/core';
import { Pets } from '../pets/pets.models';
import { PetsService } from '../pets/pets.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  titleCadastro = 'Doar Pets'

  pets:Pets = {
    namePet:'Fiona',
    doador: 'João',
    descricao:'Muito Bom',
    especie:'Gato',
    whatsapp:'64684687'

  }

  constructor(private petsService:PetsService) { }

  ngOnInit(): void {
  }

  createPets(): void{
    this.petsService.create(this.pets).subscribe(()=>{
      alert("Pets cadastrado com sucesso!")
      
    })
  }

}
