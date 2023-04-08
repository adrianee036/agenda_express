const feedDisplay = document.querySelector('#feed');
const form = document.getElementById('form');
fetch('http://localhost:8080/')
.then(response => {return response.json()})
.then(data =>  {
    data.forEach(data => {
        const contacto = `<tr><td>${data.nombre}</td><td>${data.apellido}<td>${data.telefono}</td></td></tr>`
        //`<tr><td>`+data.nombre+`</td><td>`data.apellido+data.telefono+`</tr>`

        feedDisplay.insertAdjacentHTML("beforeend", contacto)
    })
    
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let formulario = {nombre: nombre, apellido: apellido, telefono: telefono};
    let formulariojson = JSON.stringify(formulario);
    fetch('http://localhost:8080/',{
        method : "Post",
        body : formulariojson
    })

})




