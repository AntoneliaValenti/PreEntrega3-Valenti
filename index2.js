let person1 = newUser();
console.log(person1);

let person2 = newUser();
console.log(person2);
 
let person3 = {
    nameImput : "Soledad",
    ageInput : 29,
    diet : "vegana",
    rutine:"no"
}
console.log(person3);

let person4 = newUser();
console.log(person4);

let person5 = {
    nameInput : "Mara",
    ageInput : 27,
    diet : "vegana",
    rutine: "si",
}
console.log(person5);


let usuer = [person1, person2, person3, person4, person5]
console.log(usuer);


const findDiet = usuer.filter((el) => el.diet == "vegana");
console.log(findDiet);


function newUser (){
    let persona = {
        nameInput : "",
        ageInput : "",
        diet : "",
        rutine: "",
        };
        persona.nameInput = validarNombre(prompt("BIENVENIDO! Dinos tu nombre: "));
        persona.ageInput = prompt("Hola " + persona.nameInput + " por favor, dinos tu edad: ");

        if 
        (checkAge(persona.ageInput)) {
    
            persona.diet = CheckDiet(); 
            persona.rutine = checkRutine();
            alert("Muchas gracias por utilizar nuestro Servicio! El plan de salud será enviado por mail dentro de las proximas 48 horas")         
        
        } else {
            alert("Por favor, ingrese una edad válida. Si sos menor a 18 años, debes consultar con tu nutricionista de confianza!")
            persona.ageInput = "Menor";
            persona.diet = "No aplica";
            persona.rutine = "No aplica";
        }
        return persona
}


function checkAge(age) { 
    if  (isNaN(age) || age <= 18 || !age) {
      return false;
    }  
    else  return true;
}


function CheckDiet (preferSelect) {
  
    while (true) {
     preferSelect = prompt("PERFECTO! Sigamos... Pasemos a tus gustos preferidos: 1-Variada, 2-Vegetariana, 3-Vegana, 4-Proteica, 5-Fit");

        switch (preferSelect) {
            case "variada":
                select = "Variada";
                break;
            case "vegetariana":
                select = "Vegetariana";
                break;
            case "vegana":
                select = "Vegana";
                break;
            case "proteica":
                select = "Proteíca";
                break;
            case "fit":
                select = "Fit";
                break;
            default:
                alert("Opción no válida, elige una opción válida.");
                continue;
        }
        alert("Tu eleccion de recetario fue " + select)
        return preferSelect
        

    }   
}
function checkRutine (precioRutinaEjercicio) {
 let rutinaEjercicio = prompt("¿Deseas una rutina de ejercitación? (Sí/No)").toLowerCase();
        if (rutinaEjercicio === "sí" || rutinaEjercicio === "si") {
            precioRutinaEjercicio = "Requerida"; 
            alert("La rutina fue " + precioRutinaEjercicio)
        } else {
            precioRutinaEjercicio = "No requerida"; 
            alert("Con el código: RUTINE20, obtenes un 20% de descuento si solicitas tu rutina dentro de los próximos 30 días!!")
        }
        return precioRutinaEjercicio
    } 

function validarNombre(nombre) {
    while (!nombre || !isNaN(nombre)) {
      alert('Por favor, ingrese un nombre válido (no vacío y sin números).');
      nombre = prompt("BIENVENIDO! Dinos tu nombre: ");
    }
        return nombre;
}
