import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  title = 'Pets para adoações'
  public pets = [
    { nome: 'Petitto' },
    { nome: 'Gatuno' },
    { nome: 'Fiona' },
    { nome: 'Matuto' },
    { nome: 'Rex' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
