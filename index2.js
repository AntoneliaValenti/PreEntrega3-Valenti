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
}

button.addEventListener('click', () => {
    if (!datos_username.value || !datos_age.value || !datos_diet.value || !datos_rutine.value || !datos_status.value || !datos_mail.value) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    totalUser();
    localStorage.setItem("usuarios", JSON.stringify(user_list));
  
    renderizarUsuario(user_list);
    
    datos_username.value = "";
    datos_age.value = "";
    datos_diet.value = "";
    datos_rutine.value = "";
    datos_status.value = "";
    datos_mail.value = "";
});

function renderizarUsuario(user_list) {
    datos_container.innerHTML = ""
    user_list.forEach((usuario) => {
    let usuarioHTML = `
        <div>
            <h2>${usuario.nombre}</h2>
            <p>${usuario.age}</p>
        </div>
        <p>${usuario.diet}</p>
        <p>${usuario.rutine}</p>
        <p>${usuario.mail}</p>
        <p id="parrafoStatus-${usuario.nombre}" class="${usuario.status.toLowerCase()}">${usuario.status}</p>
        <div>
            <button id="botonDato-${usuario.nombre}" class="boton_dato" type="button">Cambiar Estado</button>
        </div>
        <div>
            <button id="bnt-delete-${usuario.nombre}" class="btn-delete" type="button">Eliminar</button>
        </div>
    `;
        let usuarioElemento = document.createElement('article');
        usuarioElemento.className = "datos";
        usuarioElemento.innerHTML = usuarioHTML;
        datos_container.appendChild(usuarioElemento);
    
        if(usuario.status === "Enviada"){
            usuarioElemento.classList.add("enviada")
        }else if(usuario.status === "Pendiente") {
            usuarioElemento.classList.add("pendiente")
        };

        const botonDato = document.getElementById(`botonDato-${usuario.nombre}`);
        const parrafoStatus = document.getElementById(`parrafoStatus-${usuario.nombre}`);

        botonDato.addEventListener('click', () => {
            usuarioElemento.classList.toggle("enviada");

            if (usuarioElemento.classList.contains("enviada")) {
                parrafoStatus.textContent = "Enviada";
            } else {
                parrafoStatus.textContent = "Pendiente";
                usuarioElemento.classList.add("pendiente");
            }
        });
    })
}
renderizarUsuario(user_list)

const remove = document.querySelectorAll(".btn-delete");

btn-delete.addEventListener('click', (e) => {
    user_list.flter(el => el.btn-delete != e.target.id);
});



// let remove = document.querySelectorAll(".btn-delete");
// remove.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         user_list = user_list.filter(el => el.btn !== e.target.id);
//     