import { Component, inject } from '@angular/core';
import { OffcanvasContentComponent } from '../offcanvas-content/offcanvas-content.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {
  private offcanvasService = inject(NgbOffcanvas);

  openOffcanvas() {
    const offcanvasRef = this.offcanvasService.open(OffcanvasContentComponent);
    offcanvasRef.componentInstance.name = 'World'; // Aqui, passamos a propriedade 'name' para o componente de conteúdo
  }
}
