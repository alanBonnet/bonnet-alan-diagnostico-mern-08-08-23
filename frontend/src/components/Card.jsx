import { cambiarEstadoTarea,eliminarTarea } from "../services/tasks.service"
import {i_trash} from "../assets/trash.jsx"
// eslint-disable-next-line react/prop-types
const Card = ({ id, title, description, completed, setterTasks }) => {
    if(id == "001aError"){
        return (
            <div className='p-5 rounded-lg bg-red-700/25 hover:bg-red-700/50 hover:ring-red-700 hover:right-4' id={id}>
            <h1 className='text-xl'>{title}</h1>
            <p className='text-slate-800/80 text-lg' >{description}</p>
        </div>
        )
    }
    return (
        <div className='p-5 rounded-lg bg-cyan-700/25 hover:bg-cyan-700/50 hover:ring-4' id={id}>
            <h1 className='text-xl'>{title}</h1>
            <p className='text-slate-800/80 text-lg' >{description}</p>
            <button className={`text-md bg-${completed ? 'green' : 'red'}-400 hover:bg-${completed ? 'green' : 'red'}-500 p-3 rounded-lg mr-3 mb-2`}
                onClick={() => {
                    cambiarEstadoTarea({id, setterTasks})
                }}>{completed ? "Completado 🟩" : "Sin completar 🟥"}</button>
                {/* bg-red-400 hover:bg-red-500 hover:bg-green-500 */}
            <button className="text-md bg-red-500 hover:bg-red-700 p-3 rounded-lg" onClick={()=>{eliminarTarea({id, setterTasks})}}>
                {i_trash}
            </button>
        </div>
    )
}

export default Card