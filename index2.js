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
    if (!datos_username.value || !datos_age.value || !datos_diet.value || !datos_rutine.value || !datos_status.value || !datos_mail.value) {
        alert("Por favor, complete todos los campos.");
        return;
    }
    const newUser = totalUser();
    localStorage.setItem("usuarios", JSON.stringify(user_list));
    
    let usuarioHTML = `
        <div>
        <h2>${newUser.nombre}</h2>
        <p>${newUser.age}</p>
        </div>
        <p>${newUser.diet}</p>
        <p>${newUser.rutine}</p>
        <p>${newUser.mail}</p>
        <p class="${newUser.status.toLowerCase()}">${newUser.status}</p>
        <div>
        <button class="boton_dato" type="button">Cambiar Estado</button>
        </div>
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

const botonDato = usuario.querySelector('.boton_dato');
botonDato.addEventListener('click', () => {
    usuario.classList.toggle("enviada");
});
// boton_dato.addEventListener('click', () =>{
//     newUser.classList.toggle("enviada");
// })









