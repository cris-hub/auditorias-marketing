import { TipoEntidad } from './TipoEntidad'

export class Entidad {

  nombre: string;
  codigo: string;
  direccion: string;
  tipoEntidad: TipoEntidad ;

  constructor(nombre, codigo, direccion, tipoEntidad) {
this.nombre = nombre;
this.codigo = codigo;
this.direccion = direccion;
this.tipoEntidad = tipoEntidad;
  }

}

export interface Entidad {
  nombre: string;
  codigo: string;
  direccion: string;
  tipoEntidad: TipoEntidad ;
  

}
