let input = document.getElementById('ingresar-tarea');
let boton = document.querySelector('button');
let ListaDeTareas = document.getElementById('lista-de-tareas');


boton.addEventListener('click',agregarTarea); 
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
       agregarTarea()
    }
})


function agregarTarea() {
    if (input.value){

        let tareaNueva=document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto=document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completado = document.createElement('i');
        completado.classList.add('bi', 'bi-check-circle-fill' , 'icono-completar');
        completado.addEventListener('click', completartarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash-fill', 'icono-eliminar');
        eliminar.addEventListener('click',  EliminarTarea)


        iconos.append(completado, eliminar);

        ListaDeTareas.appendChild(tareaNueva);
        input.value = '';




    }else{
        alert('Por favor ingrese una tarea');
    }
}

function completartarea(e){
    let tarea = e.target.parentNode.parentNode; 
    tarea.classList.toggle('completada');

}


function EliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}