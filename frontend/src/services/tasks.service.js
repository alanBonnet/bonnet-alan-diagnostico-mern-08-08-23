export const urlBase = "http://localhost:3000/tasks/"

export const getTareas = async ({ setTareasLista }) => {
    try {
        const tareasFetch = await fetch(urlBase, {
            method: 'GET'
        })
        if (tareasFetch.status > 204) {
            setTareasLista([{ _id: "001aError", title: "Error", "description": "No se pudo conectar con el servidor.", completed: false }])
            return 0
        }
        const tareas = await tareasFetch.json();
        setTareasLista(await tareas.tasks)
        // return 0x

        return 1
    } catch (error) {
        return "aca debería manejar el error: pd: algun día jaja"
    }
}
export const agregarTarea = async ({ title, description }, getTareas, setTareas) => {
    try {
        if (!(title.length > 6 && description.length > 6)) {
            return {
                message: "No se pudo enviar la tarea"
            }
        }
        const fetchAddTask = await fetch(`${urlBase}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        })
        const addTask = await fetchAddTask.json();
        if (addTask.message.includes('correctamente')) {
            getTareas({ setTareasLista: setTareas })
        }
        return 0
    } catch (error) {
        return "aca debería manejar el error: pd: algun día jaja"
    }
}
export const cambiarEstadoTarea = async ({ id, setterTasks }) => {
    try {
        const fetchEstado = await fetch(`${urlBase}${id}`, {
            method: 'PATCH'
        })
        if (fetchEstado.ok) {
            getTareas({ setTareasLista: setterTasks })
        }
    } catch (error) {
        return "aca debería manejar el error: pd: algun día jaja"
    }
}
export const eliminarTarea = async ({ id, setterTasks }) => {
    try {
        const fetchEliminar = await fetch(`${urlBase}${id}`, {
            method: 'DELETE'
        })
        if (fetchEliminar.ok) {
            getTareas({ setTareasLista: setterTasks })
        }
    } catch (error) {
        return "aca debería manejar el error: pd: algun día jaja"
    }
}