import {saveForm, getPolera,ongetPolera, EliminarEstudiante,EditarEstudiante,ActualizarEstudiante} from './firebase.js'

const Lista=document.getElementById('lista')

const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('closeRegisterModal')


const showRegisterModal = () => {
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)

let Editar = false;
let id = "";

window.addEventListener('DOMContentLoaded', async()=>{

    ongetPolera((querySnapshot)=>{

        let html=''

        querySnapshot.forEach(doc=> {
            const listar =doc.data()
             html +=`
             <div class="columns">
             <div class="column">
               ${listar.nombre}
             </div>
             <div class="column">
             ${listar.nombre_colegio}
             </div>
             <div class="column">
             ${listar.talla}
             </div>
             <div class="column">
             ${listar.nombre}
             </div>
             <div class="column">
             <button class='btn-delete' data-id="${doc.id}">Eliminar</button>
             <button class='btn-edit' data-id="${doc.id}">Editar</button>
             </div>
           </div>
                    `;
                    
             
        });
    
        Lista.innerHTML=html;
        const btnEliminiar=Lista.querySelectorAll('.btn-delete')
        

        btnEliminiar.forEach(btn=>{
            btn.addEventListener('click', ({target:{dataset}})=>{
                EliminarEstudiante(dataset.id)
            })
        })

        const btnEditar=Lista.querySelectorAll('.btn-edit')
        btnEditar.forEach((btn)=>{
            btn.addEventListener('click', async (e)=>{

                const documento = await EditarEstudiante(e.target.dataset.id)
                console.log(documento.data())
                const polera = documento.data()

                registerForm['Nombre'].value = polera.nombre
                registerForm['Talla'].value = polera.talla
                registerForm['Escuela'].value = polera.nombre_colegio

                Editar = true
                id = documento.id;
                

                registerForm['Registrar'].innerText = 'Actualizar'
                
            })
            btn.addEventListener('click',showRegisterModal)
            
        })

    });

})


const registerForm = document.getElementById('register-form')
registerForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    
    const nombre = registerForm['Nombre']
    const  talla = registerForm['Talla']
    const  escuela = registerForm['Escuela']

    
    if(!Editar){
        saveForm(nombre.value, talla.value, escuela.value);
    }else{
        
        ActualizarEstudiante(id,{
            nombre: nombre.value,
            talla: talla.value,
            nombre_colegio: escuela.value
        });
        Editar = false
    }
    registerForm.reset();

});


