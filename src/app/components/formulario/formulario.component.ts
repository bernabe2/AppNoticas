import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'BSCA-app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSelecciondos = new EventEmitter<any>()

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'mx';

  categorias: any[] = [
    { value: 'general' , nombre: 'General' },
    { value: 'business' , nombre: 'Negocios' },
    { value: 'entertaiment' , nombre: 'Entretenimiento' },
    { value: 'health' , nombre: 'Salud' },
    { value: 'science' , nombre: 'Ciencia' },
    { value: 'sports' , nombre: 'Deportes' },
    { value: 'tecnology' , nombre: 'Tecnologia' },
  ];

  paises: any[] = [
    { value: 'mx' , nombre: 'Mexico' },
    { value: 'ar' , nombre: 'Argentina' },
    { value: 'br' , nombre: 'Brasil' },
    { value: 'fr' , nombre: 'Francia' },
    { value: 'hg' , nombre: 'Hungria' },
    { value: 'ru' , nombre: 'Reino Unido' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSelecciondos.emit(PARAMETROS)
    
  }

}
