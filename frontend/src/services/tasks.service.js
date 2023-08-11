export const urlBase = "http://localhost:3000/tasks/"

export const getTareas = async ({ setTareasLista }) => {
    const tareasFetch = await fetch(urlBase, {
        method: 'GET'
    })
    if(getTareas.ok){
        setTareasLista([{_id:"001aError",title:"Error", "description":"No se pudo conectar con el servidor.",completed:false}])
        return 0
    }
    const tareas = await tareasFetch.json();
    setTareasLista(await tareas.tasks)

}

export const cambiarEstadoTarea = async ({id, setterTasks}) => {
    const fetchEstado = await fetch(`${urlBase}mark/${id}`, {
        method: 'PATCH'
    })
    if (fetchEstado.ok) {
        getTareas({ setTareasLista: setterTasks })
    }
}
export const eliminarTarea = async ({id, setterTasks}) => {
    const fetchEliminar = await fetch(`${urlBase}del/${id}`, {
        method: 'DELETE'
    })
    if (fetchEliminar.ok) {
        getTareas({ setTareasLista: setterTasks })
    }
}