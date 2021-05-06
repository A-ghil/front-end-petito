import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  title = 'Pets para doações'
  public pets = [
    'Petitto',
    'Gatuno',
    'Fiona',
    'Matuto',
    'Rex',
  ];  
  constructor() { }

  ngOnInit(): void {
  }

}
