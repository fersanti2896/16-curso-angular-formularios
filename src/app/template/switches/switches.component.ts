import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

}
