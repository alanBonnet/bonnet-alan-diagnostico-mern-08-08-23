import { useEffect, useState } from "react"
import Card from "./components/Card";
import { getTareas } from "./services/tasks.service";
import BTNModal from "./layout/BTNModal";
import ModalAddTask from "./layout/ModalAddTask";
function App() {
  const [tareasLista, setTareasLista] = useState([])
  const [modalHidden, setModalHidden] = useState(true)


  useEffect(() => {
    getTareas({ setTareasLista })
  }, [])


  return (
    <>
      <div className="text-lg bg-sky-600/80 text-center py-5 mx-2 text-cyan-50 rounded-b-lg mb-5">
        <p >ToDo List</p>
      </div>

      {/* <!-- Modal toggle --> */}
      {tareasLista?.[0]?._id != "001aError" &&
        <BTNModal modalHidden={modalHidden} setModalHidden={setModalHidden} /> }
      <div className="grid auto-cols-auto md:grid-cols-4 gap-2 mx-3">

        {/*MODAL*/}
        <ModalAddTask modalHidden={modalHidden} setModalHidden={setModalHidden} setTareas={setTareasLista} />

        <div className={`mr-3 w-full grid ${!modalHidden ? 'md:col-span-4 lg:col-span-3' : ''}  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 col-span-4`}>
          {tareasLista?.length > 0 && tareasLista.map(tarea => (
            <Card key={tarea._id} id={tarea._id} title={tarea.title} description={tarea.description} completed={tarea.completed} setterTasks={setTareasLista} />

          ))}
          {tareasLista?.length == 0 && <p className="text-lg p-5">No se encuentran tareas</p>}
        </div>
      </div>
    </>
  )
}

export default App
