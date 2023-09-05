const nameInput = prompt("BIENVENIDO! Dinos tu nombre: ");

const age = prompt("Hola " + nameInput + " por favor, dinos tu edad: ");
if (age > 1 && age < 18) {
    alert("Disculpa, " + nameInput + " no puedes frecuentar este sitio! Consulta con tu nutricionista de confianza!!");
} else {
    let preferSelect;
    let precioLibroRecetas;
    let precioRutinaEjercicio;
    let costoTotal; 

  
    while (true) {
        preferSelect = prompt("PERFECTO! Sigamos... Pasemos a tus gustos preferidos: 1-Variado, 2-Vegetariano, 3-Vegano, 4-Proteico, 5-Fit");

        switch (preferSelect) {
            case "1":
                precioLibroRecetas = 10;
                break;
            case "2":
                precioLibroRecetas = 20;
                break;
            case "3":
                precioLibroRecetas = 30;
                break;
            case "4":
                precioLibroRecetas = 40;
                break;
            case "5":
                precioLibroRecetas = 50;
                break;
            default:
                alert("Opción no válida, elige una opción válida.");
                continue;
        }

    
        const rutinaEjercicio = prompt("¿Deseas una rutina de ejercitación? (Sí/No)").toLowerCase();
        if (rutinaEjercicio === "sí" || rutinaEjercicio === "si") {
            precioRutinaEjercicio = 100; 
        } else {
            precioRutinaEjercicio = 0; 
        }

        
        function calcularCostoTotal (precioLibroRecetas, precioRutinaEjercicio) {
                let resultado = precioLibroRecetas + precioRutinaEjercicio;
                return resultado;
                console.log("El costo total es: $" + resultado);
            }
      
        //costoTotal = precioLibroRecetas + precioRutinaEjercicio;
        //alert('El costo total es: $' + costoTotal);

        break;
    }   
    
    
}