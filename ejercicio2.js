class Contenido{
    constructor(titulo, genero, anio){
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha(){
        return `Titulo : ${this.titulo} genero: ${this.genero} año: ${this.anio}`;
    }

    retirar(){
        this.disponible = false;
        return "Se retira el contenido";
    }

    estado(){
        return this.disponible;
    }
}
class Pelicula extends Contenido{
    constructor(titulo, genero, anio, duracion){
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada(){
        let horas = Math.floor(this.duracion/60);
        let formato = '';
        if(horas > 0){
            formato += horas+''+'h';
            if(this.duracion%60 > 0){
                formato += this.duracion%60+''+'min';
            }
        }else{
            formato +=this.duracion+'min'; 
        }
        return formato;
    }

    ficha(){
        return super.ficha()+' duración : '+this.duracionFormateada();
    }
}

class Serie extends Contenido{
    constructor(titulo, genero, anio, temporadas){
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;

    }

    registrarEpisodios(cantidad){
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios(){
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha(){
        return super.ficha()+' temporadas : '+this.temporadas+' total episodios : '+this.episodiosPorTemporada;
    }
}

let pelicula1 = new Pelicula('Sonic 3','Para toda la familia',2024,113);
let pelicula2 = new Pelicula('Kung fu panda','Para toda la familia',2008,92);
let pelicula3 = new Pelicula('Parasitos','De Corea',2019,132);

let serie1 = new Serie('La casa de papel','De españa',2021,5);
let serie2 = new Serie('La ley de los audaces','Drama',2019,9);
let serie3 = new Serie('El juego del calamar','De Corea',2025,3);

let catalogo = [pelicula1,pelicula2,pelicula3,serie1,serie2,serie3];

for(let contenido of catalogo){
    console.log(contenido.ficha());
}

for(let contenido of catalogo){
    console.log(contenido.titulo+' '+contenido.estado());
}

pelicula1.retirar();

serie1.retirar();

for(let contenido of catalogo){
    console.log(contenido.titulo+' '+contenido.estado());
}

let cantidadDisponibles = 0;

for(let contenido of catalogo){
    if(contenido.estado()){
        cantidadDisponibles ++;
    }
}

console.log('Cantidad disponibles : '+cantidadDisponibles);
