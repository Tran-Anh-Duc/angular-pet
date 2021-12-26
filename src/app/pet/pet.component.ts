import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pet: Pet ={
    name:'corgi',
    image:'https://i-vnexpress.vnecdn.net/2020/07/17/funny-expressive-dog-corgi-gen-1124-9925-1594954934_m_460x0.jpg',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
