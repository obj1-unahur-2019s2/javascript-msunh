class Corsa {
    constructor(col) {
        this.color = col

    }

    getColor(){
        return this.color
    }

    setColor(cual){
        this.color = cual
    }


    capacidad() {
        return 4
    }

    velocidadMaxima() {
        return 150
    }

    peso() {
        return 1300
    }

}

class Renault {
    constructor(tanque) {
        this.tieneTanqueAdicional = tanque
    }

    tieneTanque() { 
        return this.tieneTanqueAdicional
     }



    ponerTanque() { this.tieneTanqueAdicional = true }

    quitarTanque() { this.tieneTanqueAdicional = false }

    capacidad() {
        if (this.tieneTanqueAdicional) { return 3 }
        else { return 4 }
    }

    velocidadMaxima() {
        if (this.tieneTanqueAdicional) { return 120 }
        else { return 110 }
    }

    peso() {
        if (this.tieneTanqueAdicional) { return 1350 }
        else { return 1200 }

    }

    color() {
        return azul
    }

}

const traffic = {

    this: interior = null,
    this: motor = null,

    colocarMotor: (cual) => this.motor = cual,

    colocarInterior: (cual) => this.interior = cual,

    capacidad() { return interior.capacidad() },

    velocidadMaxima() { return motor.velocidadMaxima() },

    peso() { return interior.peso() + motor.peso() + 4000 },

    color() { return blanco }

}





const interiorComodo = {
    capacidad: () => 5,
    peso: () => 700
}

const interiorPopular = {
    capacidad: () => 12,
    peso: () => 1000
}

//motores de la traffic
const motorPulenta = {
    peso: () => 800,
    velocidadMaxima: () => 130
}

const motorBataton = {
    peso() { return 500 },
    velocidadMaxima() { return 80 }
}




class AutoEspecial {
    constructor(pe, vel, col, cap) {
        peso = pe
        velocidadMaxima = vel
        color = col
        capacidad = cap
    }

    peso(cuanto) { peso = cuanto}
	velocidadMaxima(cuanto) {velocidadMaxima = cuanto }
	color(cual) { color = cual}
	capacidad(cuanto) { capacidad = cuanto}
}


const azul = { 
    color: () => "azul"
}

const blanco = { }
const rojo = {}
const beige = {}
const verde = {}
const negro = {}




class Dependencia{
    constructor(cantidad){ 
    
    flotaDeRodados = []
	empleados = cantidad
}

	
	agregarAFlota(rodado){ flotaDeRodados.push(rodado)  }
	
	
	pesoTotalFlota() {
        var sum // en un metodo puedo poner un var para guardar
        flotaDeRodados.forEach( )
    }
    //estaBienEquipada(){ return flotaDeRodados.size()>=3 and flotaDeRodados.all({c=>c.velocidadMaxima() >=100 })}
}