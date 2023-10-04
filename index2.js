// const datos_username = document.querySelector('#username');
// const datos_diet = document.querySelector('#diet');
// const datos_ingredients1 = document.querySelector('#ingredients1');
// const datos_ingredients2 = document.querySelector('#ingredients2');
// const datos_mail = document.querySelector('#mail');
// const button = document.querySelector('#button');
// const datos_container = document.querySelector('#datos_container');
// //const btn_dato = document.querySelector('#boton_dato');


// button.addEventListener('click', () => {
//     let datos = document.createElement('article');
//     datos.className = "datos";

//     datos.innerHTML = `
//     <h3>PRIMER RECERTA OPCIONAL</h3>
//     <p>${datos_ingredients1.value}</p>
//     <p>${datos_ingredients2.value}</p>
//     <p>${preferSelect()}</p>
//     <button id="boton_dato" type="button">Eliminar</button> 
//     `;

//     datos_container.appendChild(datos);
// });

// const findDiet = usuer.filter((el) => (el.diet == "ternera" || el.diet == "zanahoria"));
// console.log(findDiet);

// function preferSelect (){
//     datos_ingredients1 === "ternera";
//     datos_ingredients2 === "zanahoria";
//     return 
// }


const datos_username = document.querySelector('#username'); 
const datos_age = document.querySelector('#age'); 
const datos_diet = document.querySelector('#diet');
const datos_rutine = document.querySelector('#rutine');
const datos_status = document.querySelector('#status');
const datos_mail = document.querySelector('#mail');
const button = document.querySelector('#button');
const datos_container = document.querySelector('#datos_container');

let user_list = JSON.parse(localStorage.getItem("usuarios")) || [];

function totalUser() {
    let newUser = {
        nombre: datos_username.value,
        age: datos_age.value,
        diet: datos_diet.value,
        rutine: datos_rutine.value,
        status: datos_status.value,
        mail: datos_mail.value
    };
    user_list.push(newUser);
    return newUser;
}

button.addEventListener('click', () => {
    const newUser = totalUser();
    localStorage.setItem("usuarios", JSON.stringify(user_list));
    
    let usuarioHTML = `
        <h3>${newUser.nombre}</h3>
        <p>${newUser.age}</p>
        <p>${newUser.diet}</p>
        <p>${newUser.rutine}</p>
        <p>${newUser.status}</p>
        <p>${newUser.mail}</p>
        <button class="boton_dato" type="button">Eliminar</button> 
    `;
    let usuario = document.createElement('article');
    usuario.className = "datos";
    usuario.innerHTML = usuarioHTML;
    datos_container.appendChild(usuario);

    datos_username.value = "";
    datos_age.value = "";
    datos_diet.value = "";
    datos_rutine.value = "";
    datos_status.value = "";
    datos_mail.value = "";
});


//.boton_dato.addEventListener('click', () =>)

//for (let = 0; i < 5; i ++); {}


















// // let person1 = newUser();
// // console.log(person1);

// // let person2 = newUser();
// // console.log(person2);
 
// // let person3 = {
// //     nameImput : "Soledad",
// //     ageInput : 29,
// //     diet : "vegana",
// //     rutine:"No requerida"
// // }
// // console.log(person3);

// // let person4 = newUser();
// // console.log(person4);

// // let person5 = {
// //     nameInput : "Mara",
// //     ageInput : 27,
// //     diet : "vegana",
// //     rutine: "Requerida"
// // }
// // console.log(person5);


// // let usuer = [person1, person2, person3, person4, person5]
// // console.log(usuer);


// const findDiet = usuer.filter((el) => el.diet == "vegana");
// console.log(findDiet);


// let last = usuer.pop();
// console.log(last);

// function newUser (){
//     let persona = {
//         nameInput : "",
//         ageInput : "",
//         diet : "",
//         rutine: "",
//         };
//         persona.nameInput = validarNombre(prompt("BIENVENIDO! Dinos tu nombre: "));
//         persona.ageInput = prompt("Hola " + persona.nameInput + " por favor, dinos tu edad: ");

//         if 
//         (checkAge(persona.ageInput)) {
    
//             persona.diet = CheckDiet(); 
//             persona.rutine = checkRutine();
//             alert("Muchas gracias por utilizar nuestro Servicio! El plan de salud será enviado por mail dentro de las proximas 48 horas")         
        
//         } else {
//             alert("Por favor, ingrese una edad válida. Si sos menor a 18 años, debes consultar con tu nutricionista de confianza!")
//             persona.ageInput = "Menor";
//             persona.diet = "No aplica";
//             persona.rutine = "No aplica";
//         }
//         return persona
// }


// function checkAge(age) { 
//     if  (isNaN(age) || age <= 18 || !age) {
//       return false;
//     }  
//     else  return true;
// }


// function CheckDiet (preferSelect) {
  
//     while (true) {
//      preferSelect = prompt("PERFECTO! Sigamos... Pasemos a tus gustos preferidos: 1-Variada, 2-Vegetariana, 3-Vegana, 4-Proteica, 5-Fit");

//         switch (preferSelect) {
//             case "variada":
//                 select = "Variada";
//                 break;
//             case "vegetariana":
//                 select = "Vegetariana";
//                 break;
//             case "vegana":
//                 select = "Vegana";
//                 break;
//             case "proteica":
//                 select = "Proteíca";
//                 break;
//             case "fit":
//                 select = "Fit";
//                 break;
//             default:
//                 alert("Opción no válida, elige una opción válida.");
//                 continue;
//         }
//         alert("Tu eleccion de recetario fue " + select)
//         return preferSelect
        

//     }   
// }
// function checkRutine (precioRutinaEjercicio) {
//  let rutinaEjercicio = prompt("¿Deseas una rutina de ejercitación? (Sí/No)").toLowerCase();
//         if (rutinaEjercicio === "sí" || rutinaEjercicio === "si") {
//             precioRutinaEjercicio = "Requerida"; 
//             alert("La rutina fue " + precioRutinaEjercicio)
//         } else {
//             precioRutinaEjercicio = "No requerida"; 
//             alert("Con el código: RUTINE20, obtenes un 20% de descuento si solicitas tu rutina dentro de los próximos 30 días!!")
//         }
//         return precioRutinaEjercicio
//     } 

// function validarNombre(nombre) {
//     while (!nombre || !isNaN(nombre)) {
//       alert('Por favor, ingrese un nombre válido (no vacío y sin números).');
//       nombre = prompt("BIENVENIDO! Dinos tu nombre: ");
//     }
//         return nombre;
// }
