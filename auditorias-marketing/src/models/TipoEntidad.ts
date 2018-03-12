export class TipoEntidad implements TipoEntidad {
	 id:number;
	 tipo:string;


	constructor(id:number , tipo:string) {
		this.id = id;
		this.tipo = tipo;
	}
}

export interface TipoEntidad {
 id: number;	
 tipo: string;
}