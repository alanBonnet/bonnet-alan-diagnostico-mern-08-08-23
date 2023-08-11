import { getTareas, urlBase } from "../services/tasks.service"

/* eslint-disable react/prop-types */
const ModalAddTask = ({ setModalHidden, modalHidden, setTareas }) => {
  const agregarTarea = async ({ title, description }) => {
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
  }
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const description = formData.get("description");
    const title = formData.get("title");
    agregarTarea({ title, description })
  }
  return (
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={` ${modalHidden ? "hidden" : ""} overflow-x-hidden overflow-y-hidden h-full max-h-full max-w-full col-span-4 md:col-span-4 lg:col-span-1`}>
      <div className="relative w-full max-w-full max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600/50 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={() => { setModalHidden(!modalHidden) }}>
            ✖️
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Agregar Tarea</h3>
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la tarea</label>
                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nombre tarea" required />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción de la tarea</label>
                <textarea type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Descripción tarea" required />
              </div>

              <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddTask