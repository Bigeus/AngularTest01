import { Component, Input } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas-content',
  templateUrl: './offcanvas-content.component.html',
  styleUrl: './offcanvas-content.component.css'
})
export class OffcanvasContentComponent {
  @Input() name: string = ''; // Atribuímos uma propriedade 'name' que pode ser passada ao componente
  constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
}
